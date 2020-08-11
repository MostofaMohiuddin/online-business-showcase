import React from "react";
import "../css/footer.css";
import neologo from "../images/Neo-Logo.png";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeClass: "" };
  }

  render() {
    return (
      <div className="myfooter">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-title">
                <h5>About Us</h5>
              </div>
              <span className="footer-paragraph">
                NeoLexical Ltd is one of the most respected Will Writing and
                Trust formation Company in the UK. We cover the whole of England
                and Wales. You can trust us for excellent tailored advice at a
                very competitive price.
              </span>
            </div>
            <div className="col-lg-2">
              <div className="footer-title">
                <h5>Quick Links</h5>
              </div>
              <ul>
                <li>
                  <a href="#link-to-go">FAQs</a>
                </li>
                <li>
                  <a href="#link-to-go">Services</a>
                </li>
                <li>
                  <a href="#link-to-go">Testimonials</a>
                </li>
                <li>
                  <a href="#link-to-go">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="footer-title">
                <h5>Follow Us</h5>
              </div>
              <div className="footer-follow-list">
                <div class="row">
                  <div class="col-2">
                    <a href="#link-to-go">
                      <i
                        aria-hidden="true"
                        className={`facebook f large icon  `}
                      ></i>
                    </a>
                  </div>
                  <div class="col-2">
                    <a href="#link-to-go">
                      <i
                        aria-hidden="true"
                        className={`twitter large icon  `}
                      ></i>
                    </a>
                  </div>
                  <div class="col-2">
                    <a href="#link-to-go">
                      <i
                        aria-hidden="true"
                        className={`instagram large icon  `}
                      ></i>
                    </a>
                  </div>
                  <div class="col-2">
                    <a href="#link-to-go">
                      <i
                        aria-hidden="true"
                        className={`linkedin square large icon  `}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg">
              <img
                src={neologo}
                className="img-fluid aboutus-image"
                alt="neologo"
              />
            </div>
          </div>
          <div className="footer-border"></div>
          <div className="footer-paragraph-copyright ">
            Copyright ©2020, NeoLexical Ltd, 20-22 Wenlock Road, London,
            England, N1 7GU. All rights reserved.
            <br />
            England and Wales company registration number 12608981.
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
