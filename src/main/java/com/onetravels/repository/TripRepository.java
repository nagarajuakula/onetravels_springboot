package com.onetravels.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.onetravels.model.Trip;

public interface TripRepository extends JpaRepository<Trip, Long>{

	public List<Trip> findByUserId(Long userId);
}
