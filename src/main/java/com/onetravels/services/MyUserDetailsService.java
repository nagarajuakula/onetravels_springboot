package com.onetravels.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.onetravels.model.User;
import com.onetravels.model.UserRole;
import com.onetravels.repository.UserRepository;

@Service
public class MyUserDetailsService implements UserDetailsService {

	@Autowired
	UserRepository userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<User> optionalUser = userRepo.findUserByUsername(username);
		
		if(!optionalUser.isPresent()) {
			throw new UsernameNotFoundException("User with name " + username +" did not exist");
		}
		
		User user = optionalUser.get();

		List<String> roleList = new ArrayList<String>();
		for (UserRole role : user.getRoles()) {
			roleList.add(role.getName());
		}

		return org.springframework.security.core.userdetails.User.builder().username(user.getUsername())
				.password(user.getPassword())
				.disabled(user.isEnabled())
				.accountExpired(user.isAccountNonExpired())
				.accountLocked(user.isAccountNonLocked())
				.credentialsExpired(user.isCredentialsNonExpired())
				.roles(roleList.toArray(new String[0]))
				.build();
	}

}
