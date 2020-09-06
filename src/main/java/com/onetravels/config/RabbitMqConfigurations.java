package com.onetravels.config;

import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer;
import org.springframework.amqp.rabbit.listener.adapter.MessageListenerAdapter;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.onetravels.services.RabbitMqListener;



@Configuration
public class RabbitMqConfigurations {
	
	@Value("${exchange-name}")
	private String exchange;
	
	@Value("${routing-key}")
	private String routingKey;

	@Bean
	Queue queue() {
		return new Queue("queue1", false);
	}
	
	@Bean
	DirectExchange exchange() {
		return new DirectExchange(exchange);
	}
	
	@Bean
	Binding binding(Queue queue, DirectExchange exchange) {
		return BindingBuilder.bind(queue).to(exchange).with(routingKey);
	}
	
	@Bean
	public MessageConverter messageConverter() {
		return new Jackson2JsonMessageConverter();
	}
	
	@Bean
	public AmqpTemplate amqpTemplate(ConnectionFactory factory) {
		final RabbitTemplate template = new RabbitTemplate(factory);
		template.setMessageConverter(messageConverter());
		
		return template;
	}
	
	@Bean
	MessageListenerAdapter listenerAdapter(RabbitMqListener listener) {
		return new MessageListenerAdapter(listener, "onMessage");
	}
	
	@Bean
	SimpleMessageListenerContainer container(ConnectionFactory connectionFactory,
											MessageListenerAdapter listenerAdapter) {
		SimpleMessageListenerContainer container = new SimpleMessageListenerContainer();
		container.setConnectionFactory(connectionFactory);
		container.setQueueNames("queue1");
		container.setMessageListener(listenerAdapter);
		return container;
	}
}