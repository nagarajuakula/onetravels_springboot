package com.onetravels.model;

public class AuthRequest {

	private String username;
	
	private String password;
	
	private String mobile;
	
	public AuthRequest() {
		super();
	}

	public AuthRequest(String username, String password, String mobile) {
		super();
		this.username = username;
		this.password = password;
		this.mobile = mobile;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	@Override
	public String toString() {
		return "AuthRequest [username=" + username + ", password=" + password + ", mobile=" + mobile + "]";
	}
	
	
}
