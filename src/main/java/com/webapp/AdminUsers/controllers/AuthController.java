package com.webapp.AdminUsers.controllers;

import com.webapp.AdminUsers.dao.UserDao;
import com.webapp.AdminUsers.models.User;
import com.webapp.AdminUsers.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UserDao userDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login",method = RequestMethod.POST)
    public String login(@RequestBody User user) {

        User loguedUser = userDao.getUserByCredentials(user);

        if (loguedUser != null) {

        String tokenJWT = jwtUtil.create(String.valueOf(loguedUser.getId()),loguedUser.getEmail());
            return tokenJWT;
        }
        return "FAIL";
    }
}
