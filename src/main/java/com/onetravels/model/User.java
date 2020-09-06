package com.onetravels.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name="users")
public class User implements UserDetails{

	/**
	 * 
	 */
	private static final long serialVersionUID = -13039640942478277L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long  id;
	
	@Column(nullable=false, unique=true)
	private String username;
	
	private String password;
	
	private String mobile;
	
	// image bytes can have large lengths so we specify a value
	// which is more than the default length
	@Lob
	@Column(name="picByte")
	private byte[] profilePic;
	
	@ManyToMany(targetEntity = UserRole.class, fetch=FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(name = "users_roles", joinColumns = @JoinColumn(name="users_id"),
	inverseJoinColumns = @JoinColumn(name="role_id"))
	private Collection<UserRole> roles;
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
	private Set<Trip> trips;

	public Set<Trip> getTrips() {
		return trips;
	}

	public void setTrips(Set<Trip> trips) {
		this.trips = trips;
	}

	public Collection<UserRole> getRoles() {
		return roles;
	}

	public void setRoles(Collection<UserRole> roles) {
		this.roles = roles;
	}

	public User() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public byte[] getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(byte[] profilePic) {
		this.profilePic = profilePic;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<UserRole> roles = getRoles();
		List<SimpleGrantedAuthority> authorities = new ArrayList<>();
		for(UserRole role: roles) {
			authorities.add(new SimpleGrantedAuthority(role.getName()));
		}
		return authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username
				+ ", mobile=" + mobile + "]";
	}
}
