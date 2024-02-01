import { Link } from "react-router-dom";
import CustNav from "../components/custNav";

import './page.css'
const Categories = () => {
  return (
    <div>
        <CustNav/>
        <h1 style={{textAlign:'center0'}}>Birthday Flowers</h1>
        <div className="catp-cont">
          <div className="catp-card-grid">
             
          <Link to={`/product`}><div  className="catp-card">
                <div className='catp-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-wishful-blooms-206409-m.jpg" alt="" className="catp-img" />
                    <p className="catp-img-txt">NEW ZEALAND</p>
                </div>
              </div></Link>
              <Link to={`/product`}><div  className="catp-card">
                <div className='catp-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-midnight-cheers-206650-m.jpg" alt="" className="catp-img" />
                    <p className="catp-img-txt">NEW ZEALAND</p>
                </div>
              </div></Link>
              <Link to={`/product`}><div  className="catp-card">
                <div className='catp-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-wish-upon-a-sweet-tooth-177180-m.jpg" alt="" className="catp-img" />
                    <p className="catp-img-txt">NEW ZEALAND</p>
                </div>
              </div></Link>
              <Link to={`/product`}><div  className="catp-card">
                <div className='catp-card-cont'>
                    <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt7prodlp/products/p-suited-splendor-bouquet-240781-m.jpg" alt="" className="catp-img" />
                    <p className="catp-img-txt">NEW ZEALAND</p>
                </div>
              </div></Link>
          </div>
        </div>
    </div>
  )
}

export default Categories;