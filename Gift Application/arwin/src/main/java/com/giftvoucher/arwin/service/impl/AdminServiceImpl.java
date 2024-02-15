package com.giftvoucher.arwin.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Service;

import com.giftvoucher.arwin.Repository.UserRepository;
import com.giftvoucher.arwin.dto.request.AdminRequest;
import com.giftvoucher.arwin.dto.request.LoginRequest;
import com.giftvoucher.arwin.dto.response.AdminResponse;
import com.giftvoucher.arwin.service.AdminService;
import com.giftvoucher.arwin.utils.JwtUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AdminServiceImpl implements AdminService{
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
     private final JwtUtil jwtUtil;


        @Override
        public AdminResponse getAdmin(AdminRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user=userRepository.findByAdminEmail(request.getEmail(),"ADMIN").orElseThrow();
        String token=jwtUtil.generateToken(user);
        return AdminResponse.builder()
            .message("User Login Successfully")
            .token(token)
            .build();
    }
}
