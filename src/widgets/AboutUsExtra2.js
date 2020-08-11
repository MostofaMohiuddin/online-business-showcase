import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/section.css";
import "../css/aboutusextra.css";
import slide1 from "../images/slide_1.jpg";
import slide2 from "../images/slide_2.jpg";
import slide3 from "../images/slide_3.jpg";

class AboutUsExtra2 extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div>
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="1000"
          style={{ marginBottom: "8rem" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-7 section-paragraph-big">
              We are one of the pioneering and respected Will Writing Companies
              based in the UK offering Wills and Lasting Powers of Attorney for
              those living in England and Wales,and for those living abroad but
              who have assets or property here in England or Wales.
            </div>
            <div className="col-lg-5">
              <img src={slide1} className="img-fluid imgBorder" alt="slide_1" />
            </div>
          </div>
        </div>
        <div
          className="container"
          data-aos="fade-left"
          data-aos-duration="1000"
          style={{ marginBottom: "8rem" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img src={slide2} className="img-fluid imgBorder" alt="slide_1" />
            </div>
            <div className="col-lg-7 section-paragraph-big">
              We offer a tailored advice and we are a Web based virtual company.
              The Company is currently developing a Mobile App for Wills called
              "Will-SMART" (TM Registration Pending) which can be downloaded
              from Apple Playstore or Android Playstore and it will guide you
              through a series of questions which will feed into our company's
              web server. A professional Will writer or solicitor shall draft
              your will according to the instructions received. Or you can get
              in touch with us via email or on the telephone and place your
              order with us for a new Will or LPA. If you have an existing Will,
              you may wish to update your Will because of Marriage or a birth of
              child or death of a relative or spouse or any other change of life
              circumstances that necessitates a change of your Will.
            </div>
          </div>
        </div>

        <div
          className="container"
          data-aos="fade-right"
          aos-duration="1000000"
          style={{ marginBottom: "8rem" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-7 section-paragraph-big">
              In England and Wales LPA's come in two flavours-
              <ul>
                <li>
                  One deals with Health and Welfare, known as a Health and
                  Welfare Lasting Power of Attorney.
                </li>
                <li>
                  The other type of Lasting Power of Attorney allows your named
                  Attorneys to deal with your banking affairs and your property
                  sales or purcahse,known as a Financial and Property Affairs
                  LPA.
                </li>
              </ul>
              Both have registration fees costs as well our charges for carrying
              out the work on your behalf if instructed by you. Kindly ring or
              email your details for further information . Again the website has
              a Lasting Power of Attorney instruction questionnaire for you to
              completeif you are interested in beginning this process.
            </div>
            <div className="col-lg-5">
              <img src={slide3} className="img-fluid imgBorder" alt="slide_1" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsExtra2;
