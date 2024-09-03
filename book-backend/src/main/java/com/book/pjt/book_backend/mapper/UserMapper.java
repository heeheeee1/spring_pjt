package com.book.pjt.book_backend.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {

	public String userIdCheck(String userId);
	
}
