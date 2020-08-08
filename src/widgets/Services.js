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
              className="col-lg-4"
            >
              <i
                aria-hidden="true"
                className={`wordpress forms huge icon services-title-icon`}
              ></i>
              <h3 className="section-subtitle">Will Writing</h3>
              <span className="section-paragraph">
                Wills made for UK based persons living in England or Wales and
                for non-residents who have property in England or Wales who wish
                to have an English will to deal with it.
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="col-lg-4"
            >
              <i
                aria-hidden="true"
                className={`group huge icon services-title-icon`}
              ></i>
              <h3 className="section-subtitle">Probate</h3>
              <span className="section-paragraph">
                We provide both a fixed fee grant of probate or letters of
                administration only service. We also provide a full
                administration of estate service, fees are estimated on a
                tailored service.
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="col-lg-4"
            >
              <i
                aria-hidden="true"
                className={`certificate huge icon services-title-icon`}
              ></i>
              <h3 className="section-subtitle">Lasting Power of Attorney</h3>
              <span className="section-paragraph">
                <ul>
                  <li>Lasting Power of Attorney for health and welfare.</li>
                  <li>
                    Lasting Power of Attorney for property and financial
                    affairs. Both costs the same fees and each has a
                    registration fee currency at £82 per LPA registered with the
                    office of public guardian.
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

export default Services;
