package com.onetravels.services;

import org.springframework.amqp.core.Message;
import org.springframework.amqp.core.MessageListener;
import org.springframework.stereotype.Component;

@Component
public class RabbitMqListener implements MessageListener {

	@Override
	public void onMessage(Message message) {
		System.out.println("******************** Start: Consuming message ********************");
		System.out.println(message);
		System.out.println("******************** End: Consuming message ********************");
		
	}
}
