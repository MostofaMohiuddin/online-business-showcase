import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/aboutus.css";
import "../css/section.css";
import sectionimage from "../images/hero_1.jpg";

class AboutUs extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 data-aos="fade-up" className="section-title">
            About Us
          </h1>
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="col-lg-6"
            >
              <img src={sectionimage} className="img-fluid " alt="hero_1" />
              <div className="bgcircle"></div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-lg-6"
              style={{ paddingLeft: "100px" }}
            >
              <h3 className="section-subtitle">
                Tailored Advice, Competitive Price
              </h3>
              <span className="section-paragraph">
                <div style={{ marginBottom: "2vh" }}>
                  We are the most respected will writing and probate firms in
                  the UK covering England and Wales.
                </div>
                <ul>
                  <li>
                    Decide who looks after your affairs & assets after you die.
                  </li>
                  <li>
                    Save your family the heartache of not knowing your wishes.
                  </li>
                  <li>Save tax and protect your assets from local taxes.</li>
                  <li>
                    Fixed fees, appointments in your home or over the telephone,
                    at a time that suits you.
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
