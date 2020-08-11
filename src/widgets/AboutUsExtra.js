import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../css/section.css";
import "../css/aboutusextra.css";
import slide1 from "../images/slide_1.jpg";
import slide2 from "../images/slide_2.jpg";
import slide3 from "../images/slide_3.jpg";

class AboutUsExtra extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-lg-12"
              //   style={{ paddingLeft: "100px" }}
            >
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row align-items-center">
                      <div class="col-lg-6 slide1-textstyle">
                        We are one of the pioneering and respected Will Writing
                        Companies based in the UK offering Wills and Lasting
                        Powers of Attorney for those living in England and
                        Wales,and for those living abroad but who have assets or
                        property here in England or Wales.
                      </div>
                      <div class="col-lg-6 ">
                        <div style={{ paddingLeft: "100px" }}>
                          <img
                            src={slide1}
                            className="img-fluid imgBorder"
                            alt="slide_1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item ">
                    <div class="row align-items-center">
                      <div class="col-lg-6 slide2-textstyle">
                        We offer a tailored advice and we are a Web based
                        virtual company. The Company is currently developing a
                        Mobile App for Wills called "Will-SMART" (TM
                        Registration Pending) which can be downloaded from Apple
                        Playstore or Android Playstore and it will guide you
                        through a series of questions which will feed into our
                        company's web server. A professional Will writer or
                        solicitor shall draft your will according to the
                        instructions received. Or you can get in touch with us
                        via email or on the telephone and place your order with
                        us for a new Will or LPA. If you have an existing Will,
                        you may wish to update your Will because of Marriage or
                        a birth of child or death of a relative or spouse or any
                        other change of life circumstances that necessitates a
                        change of your Will.
                      </div>
                      <div class="col-lg-6">
                        <div style={{ paddingLeft: "100px" }}>
                          <img
                            src={slide2}
                            className="img-fluid imgBorder"
                            alt="slide_2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="row align-items-center">
                      <div class="col-lg-6 slide2-textstyle">
                        In England and Wales LPA's come in two flavours- <br />
                        one deals with Health and Welfare, known as a Health and
                        Welfare Lasting Power of Attorney.
                        <br /> The other type of Lasting Power of Attorney
                        allows your named Attorneys to deal with your banking
                        affairs and your property sales or purcahse,known as a
                        Financial and Property Affairs LPA. <br />
                        Both have registration fees costs as well our charges
                        for carrying out the work on your behalf if instructed
                        by you. Kindly ring or email your details for further
                        information . Again the website has a Lasting Power of
                        Attorney instruction questionnaire for you to completeif
                        you are interested in beginning this process.
                      </div>
                      <div class="col-lg-6">
                        <div style={{ paddingLeft: "100px" }}>
                          <img
                            src={slide3}
                            className="img-fluid imgBorder"
                            alt="slide_3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true">
                      prev
                    </span> */}
                    <i class="caret square left huge icon"></i>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    {/* <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span> */}
                    <i class="caret square right huge icon"></i>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUsExtra;
