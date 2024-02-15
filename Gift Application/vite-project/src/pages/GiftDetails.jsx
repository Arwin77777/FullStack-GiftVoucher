import { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";
import { Button, ButtonToolbar } from 'rsuite';
import PropTypes from 'prop-types';
import '../App.css';

const Product = () => {
  const [userData, setUserData] = useState({});
    // console.log(giftId);
    // console.log("gift Id ",giftId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tok = window.localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8181/api/admin/getpariculargift/${giftId}`, {
          headers: {
            Authorization: `Bearer ${tok}`,
          },
        });
        // console.log(response.data);
        setUserData(response.data);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <UserNavbar></UserNavbar>
      <div className="prod-cont">
        <div className="prod-cont-img">
          {userData.imgUrl && (
            <img src={userData.imgUrl} alt="" className="prod-img" />
          )}
        </div>
        <div className="prod-cont-info">
          <div className="prod-info-head">
            {userData.name && (
              <h1 className="info-head">{userData.giftName}</h1>
            )}
          </div>
          <div className="prod-info-price">
            <h2>₹ {userData.giftPrice}</h2>
          </div>
          <div className="prod-desc">
            <h2 className="prod-desc-txt-head">Description</h2>
            {userData.description && (
              <p className="prod-desc-txt">{userData.giftDetails}</p>
            )}
          </div>
          <div className="prod-theme">
                <h1 className="prod-teme-head">Make it special</h1>
                <h2 className="prod-theme-sub">Gourmet-addons</h2>
                <div className="prod-addons">
                    <div className="prod-theme-slider">
                        <div className="prod-theme-slider-card">
                            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt3prodlp/products/p-assorted-laddoo-gift-box-268053-m.jpg" alt="" className="prod-theme-img" />
                            <p className="prod-theme-txt">Assorted Laddoo Gift</p>
                            <p style={{fontSize:'1vw'}}>₹ 555</p>
                            <ButtonToolbar>
                                <Button appearance="ghost" style={{borderColor:'red',color:'red'}}>Add</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                    <div className="prod-theme-slider">
                    <div className="prod-theme-slider-card">
                        <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt3prodlp/products/p-assorted-laddoo-gift-box-268053-m.jpg" alt="" className="prod-theme-img" />
                        <p className="prod-theme-txt">Assorted Laddoo Gift</p>
                        <p style={{fontSize:'1vw'}}>₹ 555</p>
                        <ButtonToolbar>
                            <Button appearance="ghost" style={{borderColor:'red',color:'red'}}>Add</Button>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="prod-theme-slider">
                    <div className="prod-theme-slider-card">
                        <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt3prodlp/products/p-assorted-laddoo-gift-box-268053-m.jpg" alt="" className="prod-theme-img" />
                        <p className="prod-theme-txt">Assorted Laddoo Gift</p>
                        <p style={{fontSize:'1vw'}}>₹ 555</p>
                        <ButtonToolbar>
                            <Button appearance="ghost" style={{borderColor:'red',color:'red'}}>Add</Button>
                        </ButtonToolbar>
                    </div>
                </div>
                <div className="prod-theme-slider">
                    <div className="prod-theme-slider-card">
                        <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt3prodlp/products/p-assorted-laddoo-gift-box-268053-m.jpg" alt="" className="prod-theme-img" />
                        <p className="prod-theme-txt">Assorted Laddoo Gift</p>
                        <p style={{fontSize:'1vw'}}>₹ 555</p>
                        <ButtonToolbar>
                            <Button appearance="ghost" style={{borderColor:'red',color:'red'}}>Add</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
            <div className="prod-btn">
                <ButtonToolbar>
                    <Button appearance="primary" style={{borderColor:'red',color:'white'}}>Add To Cart</Button>
                </ButtonToolbar>
                <ButtonToolbar>
                    <Button appearance="default" style={{borderColor:'red',color:'black',marginLeft:'5vw'}}>Buy Now</Button>
                </ButtonToolbar>
            </div>
            
            </div>
        </div>
      </div>
    </>
  );
};


export default Product;