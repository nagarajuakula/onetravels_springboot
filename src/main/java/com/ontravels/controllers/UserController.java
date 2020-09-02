package com.ontravels.controllers;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ontravels.model.AuthRequest;
import com.ontravels.model.RoleEnum;
import com.ontravels.model.User;
import com.ontravels.model.UserRole;
import com.ontravels.repository.UserRepository;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "*")
public class UserController {
	
	@Autowired 
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@GetMapping
	public List<User> getUsers() {
		return userRepo.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> getUser(@PathVariable Long id) throws Exception {
		
		User user = userRepo.findById(id).stream()
				.findFirst()
				.orElseThrow(() -> new Exception("User with id " + id + " not found"));;
		
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/create")
	public ResponseEntity<User> createUser(@RequestBody AuthRequest user) {
		User u = new User();
		u.setId(0);
		u.setUsername(user.getUsername());
		u.setPassword(encoder.encode(user.getUsername()) );
		u.setMobile(user.getMobile());
		
		UserRole role = new UserRole();
		role.setName(RoleEnum.USER.name());
		role.setId(RoleEnum.USER.ordinal());
		u.setRoles(Arrays.asList(role));
		
		userRepo.save(u);
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) throws Exception {
		User user = userRepo.findById(id).stream()
				.findFirst()
				.orElseThrow(() -> new Exception("User with id " + id + " not found"));
		userRepo.delete(user);
		
		return ResponseEntity.ok().body("User Deleted");
	}

	@PutMapping
	public ResponseEntity<?> updateUser(@RequestBody User user) throws Exception {
		User currentUser = userRepo.findById(user.getId()).stream()
				.findFirst()
				.orElseThrow(() -> new Exception("User with id " + user.getId() + " not found"));
		
		currentUser.setUsername(user.getUsername());
		currentUser.setMobile(user.getMobile());
		User updatedUser = userRepo.save(currentUser);
		
		return ResponseEntity.ok(updatedUser);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<?> saveProfilePic( @PathVariable Long id, @RequestParam("imageFile") MultipartFile file) throws Exception {
		System.out.println(file.getBytes().length);
		
		User user = userRepo.findById(id).stream()
				.findFirst()
				.orElseThrow(() -> new Exception("User with id " + id + " not found"));
		
		user.setProfilePic(compressBytes(file.getBytes()));
		User updatedUser = userRepo.save(user);
		
		return ResponseEntity.ok(updatedUser);
	}
	
	@GetMapping("/{id}/profilePic")
	public ResponseEntity<?> getProfilePic( @PathVariable Long id) throws Exception {
		
		User user = userRepo.findById(id).stream()
				.findFirst()
				.orElseThrow(() -> new Exception("User with id " + id + " not found"));
		
		return ResponseEntity.ok(user.getProfilePic() != null ? decompressBytes(user.getProfilePic()) : 0);
	}
	
	public static byte[] compressBytes(byte[] data) {
		Deflater deflater = new Deflater();
		deflater.setInput(data);
		deflater.finish();
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer= new byte[1024];
		while(!deflater.finished()) {
			int count = deflater.deflate(buffer);
			outputStream.write(buffer, 0 , count);
		}
		try {
			outputStream.close();
		} catch(IOException e) {
	}
		System.out.println("Compressed Image byte size " + outputStream.toByteArray().length);
		return  outputStream.toByteArray();
	}
	
	public static byte[] decompressBytes(byte[] data) throws DataFormatException{
		Inflater inflater = new Inflater();
		inflater.setInput(data);
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
		byte[] buffer= new byte[1024];
		while(!inflater.finished()) {
			int count = inflater.inflate(buffer);
			outputStream.write(buffer, 0 , count);
		}
		try {
			outputStream.close();
		} catch(IOException e) {
	}
		System.out.println("Compressed Image byte size " + outputStream.toByteArray().length);
		return  outputStream.toByteArray();
	}
}
