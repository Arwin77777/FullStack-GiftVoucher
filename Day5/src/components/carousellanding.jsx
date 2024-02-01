import '../App.css';

const Carous = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
        </ol>
        <div className="carousel-inner" style={{ borderRadius: '2vh' }}>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/30_min_delivery_d_banners_5_20240119174111.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/designers_pick_d_banners_5_20240123164856.gif" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/birthday_d_igp_banner_20230626.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/anniversary_d_igp_banner_20230626.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/cakes_d_banners_5_20240102135338.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/pantone_d_banners_5_20240115111857.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/corporate_gifts_d_banners_5_20231220083134.jpg" alt="Third slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn.igp.com/f_auto,q_auto,t_pnopt32prodlp/banners/flowers_d_igp_banner_20230626.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Carous;
