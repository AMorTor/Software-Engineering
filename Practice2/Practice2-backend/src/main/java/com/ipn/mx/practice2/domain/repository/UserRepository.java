package com.ipn.mx.practice2.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ipn.mx.practice2.domain.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
