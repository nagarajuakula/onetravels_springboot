package com.ontravels.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ontravels.model.Trip;
import com.ontravels.model.User;
import com.ontravels.repository.TripRepository;
import com.ontravels.repository.UserRepository;

@RestController
@RequestMapping("/api/trips")
@CrossOrigin(origins = "*")
public class TripController {

	@Autowired 
	private TripRepository tripRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@GetMapping("/{id}")
	public List<Trip> getTrips(@PathVariable("id") Long userId) {
		User user = userRepo.findById(userId).stream().findFirst().get();
		if(user.getRoles().stream().findFirst().get().getName().equals("ADMIN")) {
			return tripRepo.findAll();
		}
		return tripRepo.findByUserId(userId);
	}
	
	@PostMapping("/create/{id}")
	public ResponseEntity<Trip> addTrip(@PathVariable("id") Long userId, @RequestBody Trip trip) {

		Optional<Trip> savedTrip = userRepo.findById(userId).map(user -> {
			trip.setUser(user);
			return tripRepo.save(trip);
		});
		return ResponseEntity.status(HttpStatus.CREATED).body(savedTrip.get());
	}
	
	@DeleteMapping("/trip/{id}")
	public ResponseEntity<?> deleteTrip(@PathVariable("id") Long id) throws Exception {
		Trip trip = tripRepo.findById(id).stream()
				.findFirst()
				.orElseThrow(() -> new Exception("User with id " + id + " not found"));
		tripRepo.delete(trip);
		
		return ResponseEntity.ok().body("Trip Deleted");
	}

	@PutMapping("/trip/{id}")
	public ResponseEntity<?> updateTrip(@PathVariable("id") Long id, @RequestBody Trip trip) throws Exception {
		Trip existingTrip = tripRepo.findById(id).stream()
				.findFirst()
				.orElseThrow(() -> new Exception("Trip with id " + id + " not found"));
		
		trip.setUser(existingTrip.getUser());
		
		Trip updatedTrip = tripRepo.save(trip);
		
		return ResponseEntity.ok(updatedTrip);
	}
}
