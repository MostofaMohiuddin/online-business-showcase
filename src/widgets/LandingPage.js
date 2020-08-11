import React from "react";

import "../css/navbar.css";
import "../css/header.css";
import "../css/section.css";
import AboutUs from "./AboutUs";
import Services from "./Services";
import FAQs from "./FAQs";
import Consulting from "./Consulting";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import neologo from "../images/Neo-Logo.png";
import AboutUsExtra from "./AboutUsExtra";
import AboutUsExtra2 from "./AboutUsExtra2";

class LandingPage extends React.Component {
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
          <div className="mynavbar-top">
            <div className="mynavbar-top-primary">
              <div className="mynavbar-top-primary-item">
                <i aria-hidden="true" className={`point topbar icon`}></i> 28-42
                Celements Road, Ilford, London, IG1 1BA
              </div>
              <div className="mynavbar-top-primary-item">
                <i
                  aria-hidden="true"
                  className={`mobile alternate topbar icon`}
                ></i>
                +44 78 0438 8055
              </div>
            </div>
            <div className="mynavbar-top-button">
              <a
                href="#consulting"
                class="button"
                role="button"
                aria-pressed="true"
              >
                Free consulting
              </a>
            </div>
          </div>
          <div className={`mynavbar ${this.state.activeClass}`}>
            <input type="checkbox" id="check"></input>
            <a href="#link-to-go" className="logo">
              <img src={neologo} className="img-fluid" alt="neologo" />
            </a>
            <ul>
              <li>
                <a href="#link-to-go">Home</a>
              </li>
              <li>
                <a href="#aboutus">About Us</a>
              </li>
              <li>
                <a href="#link-to-go">Features</a>
              </li>
              <li>
                <a href="#link-to-go">Services</a>
              </li>
              <li>
                <a href="#link-to-go">Testimonials</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
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
            <a
              href="#link-to-go"
              class="button"
              role="button"
              aria-pressed="true"
            >
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
        <div id="aboutusextra" className="section">
          <AboutUsExtra />
        </div>
        <div id="aboutusextra" className="section">
          <AboutUsExtra2 />
        </div>
        <div id="services" className="section">
          <Services />
        </div>
        <div id="consulting" className="sectiongray">
          <Consulting />
        </div>
        <div id="testimonial" className="section">
          <Testimonial />
        </div>
        <div id="pricing" className="sectiongray">
          <Pricing />
        </div>
        <div id="FAQs" className="section">
          <FAQs />
        </div>

        <Footer />
      </div>
    );
  }
}

export default LandingPage;
