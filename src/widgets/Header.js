import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/navbar.css";
import "../css/header.css";
import "../css/section.css";
import AboutUs from "./AboutUs";
import FAQs from "./FAQs";
import Footer from "./Footer";
import neologo from "../images/Neo-Logo.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeClass: "" };
  }
  componentDidMount() {
    Aos.init({ duration: 2000 });
    window.addEventListener("scroll", () => {
      let activeClass = "sticky";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }
  render() {
    return (
      <div>
        <div className="banner">
          <div className="mynavbar-top">
            <div className="mynavbar-top-primary">
              <div className="mynavbar-top-primary-item">
                <i aria-hidden="true" className={`point topbar icon`}></i>20-22
                Wenlock Road, London, England
              </div>
              <div className="mynavbar-top-primary-item">
                <i
                  aria-hidden="true"
                  className={`mobile alternate topbar icon`}
                ></i>
                +44 78 0438 8055
              </div>
              <div className="mynavbar-top-primary-item">
                <i
                  aria-hidden="true"
                  className={`clock outline topbar icon`}
                ></i>
                9AM-11AM
              </div>
            </div>
            <div className="mynavbar-top-button">
              <a href="#" class="button" role="button" aria-pressed="true">
                Free consulting
              </a>
            </div>
          </div>
          <div className={`mynavbar ${this.state.activeClass}`}>
            <input type="checkbox" id="check"></input>
            <a href="#" className="logo">
              <img src={neologo} className="img-fluid" />
            </a>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#aboutus">About Us</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#FAQs">FAQs</a>
              </li>
            </ul>
            <label htmlFor="check" className="checklabel">
              <i
                aria-hidden="true"
                className={`bars big icon burger ${this.state.activeClass}`}
              ></i>
              <i
                aria-hidden="true"
                className={`window close big icon sidebarclose ${this.state.activeClass}`}
              ></i>
            </label>
          </div>
          <div className="header-primary">
            <span className="header-primary-title">WILLS AND TRUSTS</span>
            <span className="header-primary-subtitle">
              The UK’s leading will writing and trusts formation experts.
            </span>
            <a href="#" class="button" role="button" aria-pressed="true">
              Get in Touch
            </a>
          </div>
          <a href="#aboutus" className="header-scroll">
            <div className="header-scroll-box">
              <div className="header-scroll-dot"></div>
            </div>
          </a>
        </div>
        <div data-aos="fade-up" id="aboutus" className="section">
          <AboutUs />
        </div>
        <div id="FAQs" className="sectiongrey">
          <FAQs />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Header;
{
  /* <div className="row">
  <div className="col-sm-3">
    <i aria-hidden="true" className={`point topbar icon`}></i>20-22 Wenlock
    Road, London, England
  </div>
  <div className="col-sm-2">
    <i aria-hidden="true" className={`mobile alternate topbar icon`}></i>
    +44 78 0438 8055
  </div>
  <div className="col-3">a</div>
  <div className="col-3">a</div>
</div>; */
}
