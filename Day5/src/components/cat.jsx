// import React from 'react';
import '../css/CardSlider.css';

const CardSlider = () => {
  const cardData = [
    { id: 1, text: 'Valentines day', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/valentines_day_d_polaroid_5_20240122192254.jpg' },
    { id: 2, text: '30-Min Delivery', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/30_min_delivery_d_polaroid_5_20240125140811.jpg' },
    { id: 3, text: 'Birthday Gifts', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/birthday_igp_lenses_20230627.jpg' },
    { id: 4, text: 'Anniversary Gifts', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/anniversary_igp_lenses_20230627.jpg' },
    { id: 5, text: 'Bulk & Corporate Gifts', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/festival_corporate_gifts_d_polaroid_5_20231221143302.jpg' },
    { id: 6, text: 'Wedding Gifts', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/wedding_gifts_igp_lenses_20230627.jpg' },
    { id: 7, text: 'Gourmet', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/gourmet_igp_lenses_20230627.jpg' },
    { id: 8, text: 'Fashion & LifeStyle', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/fashion_living_igp_lenses_20230627.jpg' },
    { id: 9, text: 'Jewellery', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/jewellery_igp_lenses_20230627.jpg' },
    { id: 10, text: 'Home & Living', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/home_living_igp_lenses_20230627.jpg' },
    { id: 11, text: 'New Arrivals', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/new_arrival_igp_lenses_20230627.jpg' },
    { id: 12, text: 'International', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/international_igp_lenses_20230118.jpg' },
    { id: 13, text: 'Disney Collection', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/disney_igp_polaroid_20230630.jpg' },
    { id: 14, text: 'Marvel Collection', imageUrl: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/marvel_igp_polaroid_20230630.jpg' },
  ];

  return (
    <div className="card-slider-container">
      <div className="card-slider">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <div className="circle-card" style={{ backgroundImage: `url(${card.imageUrl})` }}>
              {/* You can customize the content inside the card as needed */}
              {/* <p>{card.text}</p> */}
            </div>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
