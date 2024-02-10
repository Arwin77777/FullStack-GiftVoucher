package com.giftvoucher.arwin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.giftvoucher.arwin.models.Payment;

public interface PaymentRepository extends JpaRepository<Payment,String>{

    @Query("select u.paymentId from Payment u where u.user.id=:userId")
    String getPaymentByUserId(@Param("userId") String userId);

    @Query("select u.paymentId from Payment u where u.order.id=:orderId")
    String getPaymentByOrderId(@Param("orderId") String orderId);

}
