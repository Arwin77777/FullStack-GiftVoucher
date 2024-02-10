package com.giftvoucher.arwin.config;



import static com.giftvoucher.arwin.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.giftvoucher.arwin.Repository.UserRepository;
import com.giftvoucher.arwin.models.User;

import lombok.RequiredArgsConstructor;


@Component  //creating a container inside spring bean
@RequiredArgsConstructor //final key word
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count()>0) 
            return;
        
        var user=User.builder() //import user from usermodel
            .username("Arwin")
            .email("arwingift@gmail.com")
            .password(passwordEncoder.encode("Arwin@123"))
            .role(ADMIN)
            .build();
        
        userRepository.save(user);
        
    }

}
