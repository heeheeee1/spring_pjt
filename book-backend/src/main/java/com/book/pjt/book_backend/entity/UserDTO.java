package com.book.pjt.book_backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class UserDTO {
	
	private String id;
	
	private String password;
	
	private String name;
	
	private String nick_name;
	
	private int age;
	

}

