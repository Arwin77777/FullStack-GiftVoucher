package com.giftvoucher.arwin.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.giftvoucher.arwin.models.User;

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String username);

    @Query("select u.id from User u where u.email=:a")
	String getIdFromMail(@Param("a") String mail1);

}
