import React from "react";
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
        <div id="aboutus" className="section">
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
