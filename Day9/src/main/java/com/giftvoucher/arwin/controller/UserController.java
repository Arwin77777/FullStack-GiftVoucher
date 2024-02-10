package com.giftvoucher.arwin.controller;

import static com.giftvoucher.arwin.utils.MyConstant.USER;
import static com.giftvoucher.arwin.utils.MyConstant.USERLIST;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.giftvoucher.arwin.dto.response.BasicResponse;
import com.giftvoucher.arwin.dto.response.UserResponse;
import com.giftvoucher.arwin.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor
public class UserController {
    private final UserService userser;
    @GetMapping(USERLIST)
    public ResponseEntity <BasicResponse<UserResponse>> create(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
            try{
                response=userser.getAllUser();
                return new ResponseEntity<>(response,HttpStatus.OK);
                // entityClassName savedItem=repo.save(item);
            }catch(Exception e){
                response.setMessage("Something went wrong");
                return new ResponseEntity<>(response,HttpStatus.EXPECTATION_FAILED);
            }
    }
}
