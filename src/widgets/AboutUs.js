import React from "react";
import "../css/aboutus.css";
import "../css/section.css";
import sectionimage from "../images/hero_1.jpg";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeClass: "" };
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <div className="row">
            <div className="col-lg-6">
              <img src={sectionimage} className="img-fluid aboutus-image" />
              <div className="bgcircle"></div>
            </div>
            <div className="col-lg-6" style={{ paddingLeft: "100px" }}>
              <h2 className="section-subtitle">
                Tailored Advice, Competitive Price
              </h2>
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
                  <li>
                    Save tax and shelter your assets from local authorities.
                  </li>
                  <li>
                    Fixed fees, appointments in your home or at our office, at a
                    time that suits you.
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
