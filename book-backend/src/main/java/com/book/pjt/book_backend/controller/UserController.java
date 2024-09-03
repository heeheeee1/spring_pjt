package com.book.pjt.book_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.book.pjt.book_backend.service.UserService;



@Controller
public class UserController {
	
	private final UserService userService;
	
	@Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

	@GetMapping("/login")	
	public String login() {
		return "login";
	}
	
	@GetMapping("/signup")
    public String signup() {
        return "signup";

    }
}
