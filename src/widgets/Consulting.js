import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../css/consulting.css";

import "../css/section.css";

class Consulting extends React.Component {
  state = { email: "", phone: "", name: "" };
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    return (
      <div>
        <div data-aos="fade-up" className="container">
          <div class="row">
            <div class="col-md-5 consulting-subsection">
              <h2 className="section-subtitle-center">Free Consulting</h2>
              <div className="section-emphasize section-paragraph-big-center">
                Call us for an Appointment
                <div>
                  <span class="phone-button">
                    <a href="tel:+447804388055">
                      <i aria-hidden="true" className={`call icon  `}></i> +44
                      78 0438 8055
                    </a>
                  </span>
                </div>
                or fill out the form
              </div>
            </div>
            <div class="col-md-7">
              <form>
                <div className="row form-group">
                  <div className="col">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      placeholder="Name"
                    ></input>
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-6">
                    <input
                      type="email"
                      class="form-control"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                      placeholder="Email"
                    ></input>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      class="form-control"
                      value={this.state.phone}
                      onChange={(e) => this.setState({ phone: e.target.value })}
                      placeholder="Phone"
                    ></input>
                  </div>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </form>
              <button
                type="button"
                class="btn btn-outline-primary appointment-btn"
              >
                Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Consulting;
