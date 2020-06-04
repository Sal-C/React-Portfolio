import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <div className="navbar-fixed" id="navbar">
            <nav className="nav-color" role="navigation">
                <a id="logo-container" href="/" className="brand-logo">Salvador Chavez</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/bio">Home</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
      </div>
    );
  }
}

export default Navbar;