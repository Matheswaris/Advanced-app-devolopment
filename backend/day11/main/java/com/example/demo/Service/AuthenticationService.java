package com.example.demo.Service;

import com.example.demo.dto.request.LoginRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.LoginResponse;
import com.example.demo.dto.response.RegisterResponse;

//import com.elderly.elderly.dto.request.LoginRequest;
//import com.elderly.elderly.dto.request.RegisterRequest;
//import com.elderly.elderly.dto.response.LoginResponse;
//import com.elderly.elderly.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}