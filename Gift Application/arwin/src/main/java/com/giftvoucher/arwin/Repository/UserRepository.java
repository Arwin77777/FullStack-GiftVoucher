package com.giftvoucher.arwin.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.giftvoucher.arwin.models.User;

public interface UserRepository extends JpaRepository<User,String>{
    Optional<User> findByEmail(String username);

    @Query("select u from User u where u.email=:c and u.role=:d")
    Optional<User> findByAdminEmail(@Param("c") String email,@Param("d") String role);

    @Query("select u.id from User u where u.email=:a")
	String getIdFromMail(@Param("a") String mail1);

    @Query("select u.username from User u where u.email=:b")
    String getEmail(@Param("b") String email);

}
