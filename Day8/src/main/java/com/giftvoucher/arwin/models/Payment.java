package com.giftvoucher.arwin.models;




import static jakarta.persistence.GenerationType.UUID;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity
@Table(name="Payment")
public class Payment {


    @Id
    @GeneratedValue(strategy = UUID)
    private String paymentId;

    private String status;

    private Double amoutPaid;

    private Date date;

    private String modeOfPayment;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
     @OneToOne
    @JoinColumn(name = "orderId")  // Add this annotation to specify the join column
    private Orders order;
    


}