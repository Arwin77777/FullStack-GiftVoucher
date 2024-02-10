package com.giftvoucher.arwin.service;

import com.giftvoucher.arwin.dto.response.BasicResponse;
import com.giftvoucher.arwin.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}