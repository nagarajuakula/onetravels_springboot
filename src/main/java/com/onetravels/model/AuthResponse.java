package com.onetravels.model;

import java.io.Serializable;
import java.util.List;

public class AuthResponse implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 8546515728919131460L;
	private final String jwt;
	private final List<String> roles;
	private final User user;
	
	public AuthResponse(String jwt, List<String> roles, User user) {
        this.jwt = jwt;
        this.roles = roles;
        this.user = user;
    }

    public String getJwt() {
        return jwt;
    }
    
    public List<String> getRoles() {
    	return roles;
    }
    
    public User getUserId() {
        return user;
    }

}
