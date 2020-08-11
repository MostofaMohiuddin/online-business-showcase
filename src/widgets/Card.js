import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../css/section.css";
import "../css/card.css";

class Pricing extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div>
        <div class="card" data-aos="flip-right">
          <div class="card-body">
            <div class="card-title">{this.props.title}</div>
            <div class="card-price">
              <span class="card-discount-price"> {this.props.price}</span>
              <span class="card-regular-price">{this.props.priceExtra}</span>
            </div>
            <div class="card-content section-paragraph">
              <ul>
                {this.props.content.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div class="card-button">
              <a
                href="#link-to-go"
                class="button-gray"
                role="button"
                aria-pressed="true"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
