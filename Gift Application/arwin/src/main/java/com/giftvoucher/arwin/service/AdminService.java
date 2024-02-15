package com.giftvoucher.arwin.service;

import com.giftvoucher.arwin.dto.request.AdminRequest;
import com.giftvoucher.arwin.dto.response.AdminResponse;
import com.giftvoucher.arwin.dto.response.LoginResponse;

public interface AdminService {

    AdminResponse getAdmin(AdminRequest request);

    
}
