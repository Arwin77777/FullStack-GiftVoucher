package com.giftvoucher.arwin.models;

import static jakarta.persistence.GenerationType.UUID;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "gifts")
public class Gift {

    @Id
    @GeneratedValue(strategy = UUID)
    private String giftId;

    private String giftName;
    private String giftImageUrl;
    private String giftDetails;
    private String giftPrice;

    @OneToMany(mappedBy = "themeId")
    private List<Theme> themes;
   
}
