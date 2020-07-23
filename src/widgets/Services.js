import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../css/section.css";
import "../css/services.css";

class Services extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 data-aos="fade-up" className="section-title">
            Our Services
          </h1>
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="col-lg-6"
            >
              <i
                aria-hidden="true"
                className={`write square huge icon services`}
              ></i>
              <h3 className="section-subtitle">Will Writing</h3>
              <span className="section-paragraph">
                You are not required to specifically list all your assets in
                your Will; e.g. “all my real property” or “all my bank accounts”
                would be sufficient.
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="col-lg-6"
            >
              <i aria-hidden="true" className={`sun huge icon services`}></i>
              <h3 className="section-subtitle">Lasting Power of Attorney</h3>
              <span className="section-paragraph">
                You are not required to specifically list all your assets in
                your Will; e.g. “all my real property” or “all my bank accounts”
                would be sufficient.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
