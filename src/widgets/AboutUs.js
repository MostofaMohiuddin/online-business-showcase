import React from "react";
import "../css/navbar.css";
import "../css/header.css";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeClass: "" };
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let activeClass = "sticky";
      if (window.scrollY === 0) {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }
  render() {
    return (
      <div>
        <div class="container">
          <h1 style={{ textAlign: "center", color: "#0074e1" }}>About Us</h1>
          <div class="row">
            <div class="col">1 of 2</div>
            <div class="col">2 of 2</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
