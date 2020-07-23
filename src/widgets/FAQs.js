import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/aboutus.css";
import "../css/section.css";
import sectionimage from "../images/hero_1.jpg";

class FAQs extends React.Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }
  render() {
    return (
      <div>
        <div data-aos="fade-up" className="container">
          <h1 className="section-title">Frequently Ask Questions</h1>
          <div className="row">
            <div className="col-6">
              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">What is a Will?</h2>
                <span className="section-paragraph">
                  A will is a document which contains a person’s intentions on
                  the distribution of his or her assets at death.
                </span>
              </div>
              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">
                  Can my beneficiary witness my Will?
                </h2>
                <span className="section-paragraph">
                  No, a beneficiary will not be eligible to receive any benefit
                  from the estate if he/she or his/her spouse signs as a witness
                  to the Will.
                </span>
              </div>

              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">
                  How long will my Will be valid for?
                </h2>
                <span className="section-paragraph">
                  Once executed, your Will is valid until it is replaced by a
                  New Will, revoked in writing or destroyed intentionally.
                </span>
              </div>

              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">
                  What is the role of my executor and trustee?
                </h2>
                <span className="section-paragraph">
                  The role of your executor is to ensure that your wishes in
                  your will are fulfilled.
                </span>
              </div>
            </div>

            <div className="col-6">
              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">
                  Do I have to list all my assets in my Will??
                </h2>
                <span className="section-paragraph">
                  You are not required to specifically list all your assets in
                  your Will; e.g. “all my real property” or “all my bank
                  accounts” would be sufficient.
                </span>
              </div>
              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">
                  Can my Will include foreign property?
                </h2>
                <span className="section-paragraph">
                  Yes! But In order to enforce your will overseas, your executor
                  may need to re-seal the grant of probate in a court of the
                  foreign jurisdiction.
                </span>
              </div>
              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">
                  Do I need to appoint a guardian in my Will?
                </h2>
                <span className="section-paragraph">
                  You should specify the appointment of a guardian in your will
                  if you have children below 18 years.
                </span>
              </div>
              <div data-aos="fade-up" style={{ marginBottom: "3vh" }}>
                <h2 className="section-subtitle">Should I rewrite my Will?</h2>
                <span className="section-paragraph">
                  The decision depends on the change in your circumstances and
                  whether such change is adequately provided for in your will.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQs;
