import CustNav from "../components/custNav"
import { Button, ButtonToolbar } from 'rsuite';
import './page.css'
const Product = () => {
  return (
    <>
    <CustNav/>
    <div>Product</div>
    <div className="prod-cont">
        <div className="prod-cont-img">
            <img src="https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-picture-perfect-wishes-264438-m.jpg" alt="" className="prod-img" />
        </div>
        <div className="prod-cont-info">
            <div className="prod-info-head">
                <h1 className="info-head">Picture Perfect Wishes</h1>
            </div>
            <div className="prod-info-price"><h2>₹ 666</h2></div>
            <div className="prod-desc">
                <h2 className="prod-desc-txt-head">Description</h2>
                <p className="prod-desc-txt">Plush blooms meet a striking assemblage that serves as a reminder of all the abundance that's yet to come. A mini cake, luxury midnight rose candle, alstroemeria, white button chrysanthemums, daisies, dried peony flowers, eucalyptus and a personalized Polaroid photo for their big birthday bash.</p>
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
  )
}

export default Product