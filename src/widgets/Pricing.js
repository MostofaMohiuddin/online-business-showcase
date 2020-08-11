import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Card from "./Card";
import "../css/section.css";

class Pricing extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 data-aos="fade-up" className="section-title">
            Pricing
          </h1>
          <div class="container">
            <div class="row">
              <div class="col-lg">
                <Card
                  title="Single Will"
                  price="£99"
                  priceExtra="F2F or over Phone £150"
                  content={[
                    "Decide who looks after your affairs & assets after you die",
                    "Save your family the heartache of not knowing your wishes.",
                    "Save tax and protect your assets from local taxes.",
                    "Fixed fees, appointments in your home or over the telephone, at a time that suits you.",
                  ]}
                />
              </div>
              <div class="col-lg">
                <Card
                  title="Double or Joint Will"
                  price="£199"
                  priceExtra="F2F or over Phone £299"
                  content={[
                    "Decide who looks after your affairs & assets after you die",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    "Consequatur veniam fugit veritatis voluptatem accusamus. ",
                    "Veniam fuga ducimus tempore omnis sint sunt dignissimos tempora esse.",
                  ]}
                />
              </div>

              <div class="col-lg">
                <Card
                  title="Single LPA"
                  price="£195"
                  priceExtra="+ Registration Fee"
                  content={[
                    "Decide who looks after your affairs & assets after you die",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    "Consequatur veniam fugit veritatis voluptatem accusamus . ",
                    "Veniam fuga ducimus tempore omnis sint sunt dignissimos tempora esse.",
                  ]}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-lg">
                <Card
                  title="Double LPA"
                  price="£295"
                  priceExtra="+ Registration Fee"
                  content={[
                    "For 1 Client",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    "Consequatur veniam fugit veritatis voluptatem accusamus.",
                    "Veniam fuga ducimus tempore omnis sint sunt dignissimos tempora esse.",
                  ]}
                />
              </div>
              <div class="col-lg">
                <Card
                  title="Double LPA"
                  price="£395"
                  priceExtra="+ Registration Fee"
                  content={[
                    "For 2 Clients",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    "Consequatur veniam fugit veritatis voluptatem accusamus.",
                    "Veniam fuga ducimus tempore omnis sint sunt dignissimos tempora esse.",
                  ]}
                />
              </div>

              <div class="col-lg">
                <Card
                  title="4 LPAs"
                  price="£195"
                  priceExtra="+ Registration Fee"
                  content={[
                    "For 2 Clients",
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                    "Consequatur veniam fugit veritatis voluptatem accusamus.",
                    "Veniam fuga ducimus tempore omnis sint sunt dignissimos tempora esse.",
                  ]}
                />
              </div>
            </div>
            <div class="ui horizontal divider ">Or </div>
            <h3 data-aos="fade-up" class="section-subtitle-center">
              Call Us For Details
            </h3>
            <div
              data-aos="fade-up"
              class="section-paragraph-big-center  section-emphasize"
            >
              <span class="phone-button">
                <a href="tel:+447804388055">
                  <i aria-hidden="true" className={`call icon  `}></i> +44 78
                  0438 8055
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
