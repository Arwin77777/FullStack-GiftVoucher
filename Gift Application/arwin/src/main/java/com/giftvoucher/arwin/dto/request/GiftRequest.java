package com.giftvoucher.arwin.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GiftRequest {
    private String giftName;
    private String giftImageUrl;
    private String giftDetails;
    private String giftPrice;
    
}
