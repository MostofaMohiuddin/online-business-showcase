import React from "react";
import "../css/navbar.css";

class Navbar extends React.Component {
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
        <div className={`header ${this.state.activeClass}`}>
          <a href="#" className="logo">
            Logo
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="banner"></div>
      </div>
    );
  }
}

export default Navbar;
