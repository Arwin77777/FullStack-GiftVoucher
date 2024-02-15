

import l1 from '../images/home_im.png';
import UserNavbar from '../components/UserNavbar'
import Button from '@mui/material/Button';
import '../css/home.css'
import ProductSlider from '../components/ProductSlider';
import ProductDetailsSlider from '../components/ProductDetailsSlider';
import SendGifts from '../components/SendGifts';
import Review from '../components/Review';
import { Link } from 'react-router-dom';
import Gifts from './Gifts';
import "../css/Gifts.css"

const Home = () => {
  return (
    <div>
        <UserNavbar></UserNavbar>
        <div className='car' >
          <div style={{width:'55%'}}>
            <div style={{margin:'10%'}} >
            <p>Up to <span style={{color:'blue',fontSize:'20px'}}>40%</span>  off on Valentine's day</p>
            {/* <br /> */}
            <div className='home_text'>DREAM <span style={{color:'blue'}}>GIFT</span> COLLECTION</div>
            <br/>
            <Link to="/categories">
            <Button variant="contained">SHOP NOW</Button>
            </Link>
           
            </div>
           
          </div>
          <div style={{float:'right',width:'45%'}} className='home_im'>
          {/* <HomeCarousel></HomeCarousel> */}
          <img className='h_img' src={l1} height="95%" width="70%"/>
          </div>
          <div style={{float:'right'}}>
          <div className='eclipse-1'></div>
          <br />
        <div className='eclipse-2'></div>
        <br />
        <div className='eclipse-3'></div>
          </div>

        </div>

      <br></br>

      <div>
        <ProductSlider></ProductSlider>
      </div>
      {/* <br /> */}
      <div>
        <h2 style={{textAlign:'center'}}>TOP <span style={{color:'blue'}}>PICKS</span></h2>
        <ProductDetailsSlider></ProductDetailsSlider>
      </div>
      <br />
      <br />
      <br />
      <div>
        <h2 style={{textAlign:'center'}}>SEND IT WORLDWIDE</h2>
        <SendGifts></SendGifts>
      </div>
        <br />
        <div>
          <Review></Review>
        </div>
        <div>
          <Gifts></Gifts>
        </div>
    </div>
  )
}

export default Home;