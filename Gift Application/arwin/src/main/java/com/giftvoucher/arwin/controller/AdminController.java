package com.giftvoucher.arwin.controller;

import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.giftvoucher.arwin.Repository.UserRepository;
import com.giftvoucher.arwin.dto.request.AdminRequest;
import com.giftvoucher.arwin.dto.response.AdminResponse;
import com.giftvoucher.arwin.dto.response.GiftResponse;
import com.giftvoucher.arwin.dto.response.LoginResponse;
import com.giftvoucher.arwin.service.AdminService;
import com.giftvoucher.arwin.utils.JwtUtil;
import com.giftvoucher.arwin.utils.MyConstant;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class AdminController {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final AdminService adminService;

    @PostMapping(MyConstant.CHECK_ADMIN)
    public ResponseEntity<AdminResponse> checkAdmin(@RequestBody AdminRequest request)
    {
        AdminResponse response= new AdminResponse();
        try
        {
            response=adminService.getAdmin(request);
            return new ResponseEntity<>(response, ACCEPTED);
        }
        catch (Exception e) {
            LoginResponse.builder()
            .message("Something went wrong")
            .token("")
            .build();
        return new ResponseEntity<>(response,EXPECTATION_FAILED);
    }
}
}