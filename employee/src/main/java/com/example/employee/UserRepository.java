package com.example.employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
public interface UserRepository extends MongoRepository<User, String> {
	@Query("{'userName':?0}")
	public User findUserByUserName(String userName);
	@Query("{'fullName':?0}")
	public User findUserByFullName(String fullName);
	
}