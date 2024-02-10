package com.giftvoucher.arwin.models;


import static jakarta.persistence.GenerationType.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name="themes")
public class Theme {
    @Id
    @GeneratedValue(strategy = UUID)
    private String themeId;
    private String themeName;
    private String themeDetails;
    private String themePrice;

    @ManyToOne
    @JoinColumn(name = "giftId")
    private Gift gift;
}
