package com.ontravels.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ontravels.filters.AuthFilter;
import com.ontravels.services.MyUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {

	@Autowired
	private AuthFilter authFilter;
	
	@Autowired
	private MyUserDetailsService userDetailsService;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
			.authorizeRequests()
			.antMatchers("/h2-console/**", "/auth/users","/api/auth/login")
				.permitAll()
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
			.antMatchers("/auth/create").hasAnyRole("ADMIN")
			.anyRequest().authenticated()
			.and()
//			.exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
//			.and()

			// make sure we use stateless session; session won't be used to
			// store user's state.
			.sessionManagement()
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		

		// Add a filter to validate the tokens with every request
		http.addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class);
		
		http.headers().frameOptions().disable();

	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.userDetailsService(userDetailsService).passwordEncoder(encoder());

	}
	
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
}
