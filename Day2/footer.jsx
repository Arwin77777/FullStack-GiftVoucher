// Footer.jsx

import '../css/foot.css';

const Footer = () => {
  return (
    <>
      <footer className="foot-footer-section">
        <div className="container">
          <div className="foot-footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="foot-single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="foot-cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="foot-single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="foot-cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="foot-single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="foot-cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot-footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <p>Content for col-xl-4 col-lg-4 mb-50</p>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="foot-footer-widget">
                  <h3>Useful Links</h3>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="foot-footer-widget">
                  <h3>Subscribe</h3>
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><i className="fab fa-telegram-plane"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <p>Content for col-xl-6 col-lg-6 text-center text-lg-left</p>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="foot-footer-menu">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Terms</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Policy</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
