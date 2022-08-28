package com.webapp.AdminUsers.dao;

import com.webapp.AdminUsers.models.User;

import java.util.List;

public interface UserDao {
    List<User>getUser();

    void delete(Long id);

    void signUp(User user);


    User getUserByCredentials(User user);
}
