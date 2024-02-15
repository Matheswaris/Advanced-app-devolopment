package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class mathes {
	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
	
	

}


