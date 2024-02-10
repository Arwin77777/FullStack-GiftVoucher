package com.giftvoucher.arwin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.giftvoucher.arwin.models.Theme;

import java.util.Optional;


public interface ThemeRepository extends JpaRepository<Theme,String>{
   
}
