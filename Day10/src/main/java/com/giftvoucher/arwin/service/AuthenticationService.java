package com.giftvoucher.arwin.service;



import com.giftvoucher.arwin.dto.request.LoginRequest;
import com.giftvoucher.arwin.dto.request.RegisterRequest;
import com.giftvoucher.arwin.dto.response.LoginResponse;
import com.giftvoucher.arwin.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
