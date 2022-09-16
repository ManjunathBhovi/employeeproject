package com.example.employee;

import java.util.List;
//import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {


	@Autowired
	private UserRepository userRepository;

	@PostMapping
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@GetMapping
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

//
//	@PutMapping("/{id}")
//	public User updateUser(@PathVariable String id, @RequestBody User user) {
//		User new_user = userRepository.findById(id).orElse(null);
//		if (new_user != null) {
//			new_user.setFullName(user.getFullName());
//			new_user.setSsn(user.getSsn());
//			new_user.setGender(user.getGender());
//			new_user.setEmailId(user.getEmailId());
//			new_user.setAge(user.getAge());
//			new_user.setAddress(user.getAddress());
//			
//		} else {
//			return null;
//		}
//		return new_user;
//	}


	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable String id) {
		userRepository.deleteById(id);
	}
	
	
}
