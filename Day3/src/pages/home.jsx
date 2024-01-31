import Carous from "../components/carousellanding"
// import Custnav from "../components/custNav"
import '../App.css'
import CustNav from "../components/custNav"
// import Cat from "../components/cat"
import CardSlider from "../components/cat"
import Carousel from "../components/Car"
import ReviewSlider from "../components/review"
import Footer from "../components/footer"
import { Link } from "react-router-dom"
import './page.css'
// import Sencard from "../components/Sencard"
// import BasicDemo from "../components/card"
// import Imggrid from "../components/Imggrid"
// import ImageGrid from "../components/Imggrid"

const Home = () => {
  return (
    <div>
        <CustNav/>
        <div className="home-carous">
            <Carous/>
        </div>
        <div className="cat-cont-img">
          <div className="cat-cont">
            <div className="cat-cont-imgc">
            <Link to={`/Categories`}><img src="src\images\image_prev_ui.png" alt="" className="img-cat" /></Link>
            <Link to={`/Categories`}><img src="https://giftcart.com/cdn/shop/files/Wooden-Engraved_300x.png?v=1702023886" alt="" className="img-cat" /></Link>
            <Link to={`/Categories`}><img src="https://giftcart.com/cdn/shop/files/Flower-Cake_300x.png?v=1688967434" alt="" className="img-cat" /></Link>
            <Link to={`/Categories`}><img src="https://giftcart.com/cdn/shop/files/icons_with_content-03_300x.png?v=1661938990" alt="" className="img-cat" /></Link>
            <Link to={`/Categories`}><img src="https://giftcart.com/cdn/shop/files/forever-rose_1701ee2c-35c7-4e11-aff5-0444e0b4ea7f_300x.png?v=1664786454" alt="" className="img-cat" /></Link>
            <Link to={`/Categories`}><img src="https://giftcart.com/cdn/shop/files/icons_with_content-01_300x.png?v=1661938989" alt="" className="img-cat" /></Link>
            <Link to={`/Categories`}><img src="https://giftcart.com/cdn/shop/files/icons_with_content-02_300x.png?v=1661938990" alt="" className="img-cat" /></Link>
            </div>
          </div>
        </div>
        <div className="s-cont">
          <div className="s-cont-flex">
            <img className="s-cont-img" src="src\images\unique_gifts_igp_d_title.svg"/>
            <div className="s-cont-txt">
              <h1 className="s-cont-txt1">Unique Gifts Online</h1>
              <h2 className="s-cont-txt2">Curated to make every special moment a celebration</h2>
            </div>
          </div>
        </div>

        <div className="cate-cont">
          <CardSlider/>
        </div>

        <div>
          <h1>Best Selling Gifts</h1>
          {/* <BasicDemo/> */}
          <Carousel/>
        </div>

          <h1 className="sen-txt">Send Gifts worldwide</h1>
        <div className="sen-cont">
          <div className="sen-card-grid">
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_USA_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Canada_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Australia_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_UK_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/D-Germany.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_UAE_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Singapore_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_New_Zealand_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Netherlands_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>
              <div  className="sen-card">
                <div className='sen-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/banners/igp_Other_Countries_d_country_20220127.jpg" alt="" className="sen-img" />
                    <p className="sen-img-txt">NEW ZEALAND</p>
                </div>
              </div>

          </div>
        </div>
        <div className="rev-cont">
          <ReviewSlider/>
        </div>

        <Footer/>
        
    </div>
  )
}

export default Home