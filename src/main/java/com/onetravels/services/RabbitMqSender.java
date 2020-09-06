package com.onetravels.services;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.onetravels.model.Trip;

@Service
public class RabbitMqSender {

	@Autowired
	private AmqpTemplate amqpTemplate;
	
	@Value("${exchange-name}")
	private String exchange;
	
	@Value("${routing-key}")
	private String routingKey;
	
	public void send(Trip trip) {
		amqpTemplate.convertAndSend(exchange, routingKey, trip);
	}
}
