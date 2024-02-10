package com.giftvoucher.arwin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giftvoucher.arwin.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer,String>{

}
