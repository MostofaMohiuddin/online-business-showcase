import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/section.css";

class Testimonial extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="section-title">Testimonials</h1>
        </div>
      </div>
    );
  }
}

export default Testimonial;
