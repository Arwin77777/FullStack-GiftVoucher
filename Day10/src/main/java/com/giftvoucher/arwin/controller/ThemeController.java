package com.giftvoucher.arwin.controller;

import static com.giftvoucher.arwin.utils.MyConstant.ADDGIFT;
import static com.giftvoucher.arwin.utils.MyConstant.ADDTHEME;
import static com.giftvoucher.arwin.utils.MyConstant.DELETEGIFT;
import static com.giftvoucher.arwin.utils.MyConstant.EDITGIFT;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.giftvoucher.arwin.Repository.ThemeRepository;
import com.giftvoucher.arwin.dto.request.GiftRequest;
import com.giftvoucher.arwin.dto.request.ThemeRequest;
import com.giftvoucher.arwin.dto.response.GiftResponse;
import com.giftvoucher.arwin.dto.response.ThemeResponse;
import com.giftvoucher.arwin.models.Gift;
import com.giftvoucher.arwin.models.Theme;
import com.giftvoucher.arwin.utils.MyConstant;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.ADMIN)
@RequiredArgsConstructor
public class ThemeController {
    private final ThemeRepository themeRepository;
    
    @PostMapping(ADDTHEME)
    public ResponseEntity<ThemeResponse> addTheme(@RequestBody ThemeRequest themeRequest)
    {
        try
        {
            Theme t = new Theme();
            t.setThemeName(themeRequest.getThemeName());
            t.setThemePrice(themeRequest.getThemePrice());
            t.setThemeDetails(themeRequest.getThemeDetails());
            themeRepository.save(t);
            return ResponseEntity.ok(new ThemeResponse("Theme added successfully"));
        }
        catch(Exception e) 
        {
            return new ResponseEntity<>(new ThemeResponse(e.getMessage()),HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PutMapping(MyConstant.EDITTHEME)
    public ResponseEntity<ThemeResponse> editTheme(@RequestBody ThemeRequest themeRequest,@PathVariable String id)
    {
        try
        {
            Theme t = themeRepository.findById(id)
            .orElseThrow(()->new EntityNotFoundException("No such gift exists"));

            t.setThemeName(themeRequest.getThemeName());
            t.setThemePrice(themeRequest.getThemePrice());
            t.setThemeDetails(themeRequest.getThemeDetails());

            themeRepository.save(t);

            return ResponseEntity.ok(new ThemeResponse("Theme Updated Successfully"));
        }
        catch(Exception e) {
            return new ResponseEntity<>(new ThemeResponse("Went wrong"),HttpStatus.EXPECTATION_FAILED);
        }
    }
    
    @DeleteMapping(MyConstant.DELETETHEME)
    public ResponseEntity<ThemeResponse> deleteTheme(@PathVariable String id)

    {
        try
        {

            themeRepository.deleteById(id);
            
            return ResponseEntity.ok(new ThemeResponse("Theme Deleted Successfully"));
        }
        catch(Exception e)
        {
            return new ResponseEntity<>(new ThemeResponse(e.getMessage()),HttpStatus.EXPECTATION_FAILED);
        }

    }

    @GetMapping(MyConstant.GETTHEME)
    public ResponseEntity<List<Theme>> getTheme()
    {
        try
        {
           List<Theme> res = themeRepository.findAll();
           return ResponseEntity.ok(res);
            
        }
        catch(Exception e)
        {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}
