package com.giftvoucher.arwin.utils;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.HEAD;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.*;

import org.springframework.http.HttpHeaders;

public class MyConstant {
    public static final String AUTH="/api/v1/auth";
    public static final String USER = "api/v1/user";

    //endpoints
    public static final String REGISTER="/register";
    public static final String LOGIN="/login";
    public static final String USERLIST = "/userList";


    public static final List<String> ORIGINS=Arrays.asList("https://localhost:400");
    public static final List<String> HEADERS=Arrays.asList(HttpHeaders.AUTHORIZATION,HttpHeaders.CONTENT_TYPE);
    public static final List<String> METHODS=Arrays.asList(GET.name(),POST.name(),
    PUT.name(),PATCH.name(),DELETE.name(),HEAD.name());

    //JsonWebTokens
    public static final String SWAGGER_LOCALHOST_URL = "http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME= "bearerAuth";
    public static final String SWAGGER_SCHEME = "bearer";
    public static final String SWAGGER_BEARER_FORMAT = "JWT";
    public static final String SWAGGER_DESCRIPTION = "Produce a Json Web Token.";


    //Admin endpoints
    public static final String ADMIN = "/api/admin";
    public static final String ADDGIFT = "/gift";
    public static final String EDITGIFT = "/gift/{id}";
    public static final String DELETEGIFT = "/gift/delete/{id}";
    public static final String GETGIFT = "/get/gift";
    public static final String ADDGIFTTHEME = "/{giftId}/{themeId}/{quantity}";


    public static final String ADDTHEME = "/theme";
    public static final String EDITTHEME = "/theme/{id}";
    public static final String DELETETHEME = "/theme/delete/{id}";
    public static final String GETTHEME = "/get/theme";


    //user
    public static final String EDITUSER = "/editUser/{userId}";
    public static final String DELETEUSER = "/deleteUser/{userId}";
    public static final String USERSIDE="/api";
    public static final String PAYMENTPOST="/makepayment";
    public static final String PAYMENTVIEW="/{userId}";
    public static final String ORDERPOST="/addOrder";
    public static final String EDITORDER="/editOrder/{orderId}";
    public static final String GETORDER = "/get/order/{orderId}";

}
