package com.onetravels.controllers;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.onetravels.model.AuthRequest;
import com.onetravels.model.AuthResponse;
import com.onetravels.repository.UserRepository;
import com.onetravels.security.JwtTokenUtil;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
	
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Autowired
	AuthenticationManager authManager;
	
	@Autowired 
	private UserRepository userRepo;
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthRequest request) throws Exception {

		String username = request.getUsername();
		String password = request.getPassword();
		User user = null;
		try {
			Object principal = authManager.authenticate(new UsernamePasswordAuthenticationToken(username, password)).getPrincipal();
			user = (User)principal;
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
		
		final String jwt = jwtTokenUtil.generateToken(user);
			
		List<String> roles = user.getAuthorities().stream()
					.map(item -> item.getAuthority())
					.collect(Collectors.toList());
		Optional<com.onetravels.model.User> optionalUser = userRepo.findUserByUsername(username).stream().findFirst();
		com.onetravels.model.User loggedInUser = optionalUser.get();
		
		return ResponseEntity.ok(new AuthResponse(jwt, roles, loggedInUser));
	}
}
