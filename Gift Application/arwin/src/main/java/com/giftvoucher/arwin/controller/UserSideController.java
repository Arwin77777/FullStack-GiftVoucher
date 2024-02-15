package com.giftvoucher.arwin.controller;

import org.springframework.web.bind.annotation.RestController;

import com.giftvoucher.arwin.Repository.CustomerRepository;
import com.giftvoucher.arwin.Repository.GiftRepository;
import com.giftvoucher.arwin.Repository.OrderRepository;
import com.giftvoucher.arwin.Repository.PaymentRepository;
import com.giftvoucher.arwin.Repository.ThemeRepository;
import com.giftvoucher.arwin.Repository.UserRepository;
import com.giftvoucher.arwin.dto.request.EditUserRequest;
import com.giftvoucher.arwin.dto.response.GiftResponse;
import com.giftvoucher.arwin.dto.response.RegisterResponse;
import com.giftvoucher.arwin.models.Gift;
import com.giftvoucher.arwin.models.Orders;
import com.giftvoucher.arwin.models.Payment;
import com.giftvoucher.arwin.models.Theme;
import com.giftvoucher.arwin.models.User;
import com.giftvoucher.arwin.service.UserService;
import com.giftvoucher.arwin.utils.MyConstant;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

import java.security.Principal;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping(MyConstant.USERSIDE)
@RequiredArgsConstructor
@CrossOrigin
public class UserSideController {
    private final UserService userser;
    @Autowired
    private PaymentRepository prep;
    @Autowired
    private ThemeRepository themeRepository;
    @Autowired
    private CustomerRepository custrep;
    @Autowired
    private GiftRepository giftRepository;
    @Autowired
    private OrderRepository ord;
    @Autowired
    private UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

   

     @PostMapping(MyConstant.PAYMENTPOST)
     
    public ResponseEntity<String> makePayment(@RequestBody String paymentId) {
        Payment pending_payment=prep.findById(paymentId).get();
        System.out.println("kjasdnoadfh;oashfdoisdhf;oiSFjoifhd");
        try {
            pending_payment.setStatus("true");
            pending_payment.setDate(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()));
            pending_payment.setModeOfPayment("razorpay");
            return ResponseEntity.status(HttpStatus.OK).body("Payment Successfullt Made!!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }


    @GetMapping(MyConstant.PAYMENTVIEW)
    public ResponseEntity<?> getPayment(@PathVariable String userId) {
        try{
            System.out.print(userId);
            String aq  = prep.getPaymentByUserId(userId);
            Optional<Payment> arr = prep.findById(aq);
            return ResponseEntity.ok(arr);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping(MyConstant.GETALLORDERS)
    public ResponseEntity<?> getOrders() {
        try{
            // System.out.print(userId);
            List<Orders> o = ord.findAll();
            return ResponseEntity.ok(o);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping(MyConstant.ADDGIFTTHEME)
     public ResponseEntity<GiftResponse> addGiftTheme(Principal principal,@PathVariable String themeId,@PathVariable String giftId,@PathVariable Integer quantity)
    {
        try
        {
            Theme t = themeRepository.findById(themeId)
            .orElseThrow(()->new EntityNotFoundException("No such theme exists"));
            System.out.print(t);
            Gift g = giftRepository.findByGiftId(giftId)
            .orElseThrow(()->new EntityNotFoundException("No such gift exists"));

           

            
            Orders o = new Orders();

            String mail = principal.getName();
		    String temp=userRepository.getIdFromMail(mail);
            System.out.print(temp);
		    User user = userRepository.findById(temp)	
		    .orElseThrow(() -> new EntityNotFoundException("User with email " + mail + " not found"));
            o.setUser(user);
            System.out.println(temp);
            double tp = Double.parseDouble(t.getThemePrice());
            double gp = Double.parseDouble(g.getGiftPrice());
            double price = (tp+gp)*quantity;
            o.setOrder_price(price);
            o.setQuantity(quantity);
            o.setGift(g);
            o.setTheme(t);
            o.setOrder_date(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()));
            

            ord.save(o);
            Payment payment= new Payment();
            payment.setStatus("false");
            payment.setModeOfPayment(null);
            payment.setAmoutPaid(price);
            payment.setDate(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()));
            payment.setUser(user);
            payment.setOrder(o);
            prep.save(payment);

            return ResponseEntity.ok(new GiftResponse("Order added successfully"));
        }
        catch(Exception e) {
            return new ResponseEntity<>(new GiftResponse(e.getMessage()),HttpStatus.EXPECTATION_FAILED);
        }
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<String> deleteRecharge(Principal principal,@PathVariable String orderId) {
        try {
            String aq  = prep.getPaymentByOrderId(orderId);
            prep.deleteById(aq);
            ord.deleteById(orderId);
            return ResponseEntity.status(HttpStatus.OK).body("Order Deleted Successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    // @PutMapping(MyConstant.EDITORDER)
    // public ResponseEntity<String> editOrder(@RequestBody Orders order,@PathVariable String orderId) 
    // {
    //     try
    //     {
    //         Orders o = ord.findById(orderId)
    //         .orElseThrow(()->new EntityNotFoundException("No such order exists"));

    //         o.setQuantity(order.getQuantity());
    //         return ResponseEntity.status(HttpStatus.OK).body("Order Updated Successfully");
    //     }
    //     catch(Exception e)
    //     {
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
    //     }
    // }

    @GetMapping(MyConstant.GETORDER)
    public ResponseEntity<?> getOrders(@PathVariable String orderId) {
        try{
            Optional<Orders> o = ord.findById(orderId);
            return ResponseEntity.ok(o);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @GetMapping(MyConstant.GETUSER)
    public ResponseEntity<?> getUser(@PathVariable String email) {
        try{
            Optional<User> u = userRepository.findByEmail(email);
            return ResponseEntity.ok(u);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @PutMapping(MyConstant.EDITUSER)
    public ResponseEntity<String> editUser(Principal principal,@RequestBody EditUserRequest user) {
        try
        {
            String mail = principal.getName();
		    String temp=userRepository.getIdFromMail(mail);
            // System.out.print(temp);
		    // User user = userRepository.findById(temp)	
            User u = userRepository.findById(temp)
            .orElseThrow(()->new EntityNotFoundException("No such user exists"));
    
            u.setEmail(user.getEmail());
            u.setUsername(user.getUsername());
            u.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(u);
             return ResponseEntity.ok("User data updated successfully");
        }
        catch(Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }

    @DeleteMapping(MyConstant.DELETEUSER)
    public ResponseEntity<String> deleteUser(@PathVariable String userId) {
        try {
            String pid = prep.getPaymentByUserId(userId);
            if(pid!=null)
            {
                System.out.println(pid);
                prep.deleteById(pid);
                String oid = ord.getOrderByUserId(userId);
                if(oid!=null)
                {
                    System.out.println(oid);
                    ord.deleteById(oid);
                }
            }
           
            
            userRepository.deleteById(userId);

            return ResponseEntity.status(HttpStatus.OK).body("Your Account has been deleted Successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
        }
    }


    @GetMapping(MyConstant.GETUSERNAME)
    public ResponseEntity<?> getUserName(@PathVariable String email) {
        try{
            System.out.print(email);
            String aq  = userRepository.getEmail(email);
            System.out.print("jdvfhg"+aq);
            return ResponseEntity.ok(aq);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}