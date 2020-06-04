import React, { Component } from "react";

class ImgLink extends Component {
  render() {
    return (
        <div>
            <div className="row">
                <div className="col s4 m5"></div>

                <div className="col m1">
                    <a href="https://github.com/Sal-C">
                    <img className="responsive-img" alt="Github" src="https://sal-c.github.io/Portfolio/assets/images/GitHub-Icon.png" width="60" height="60"></img>
                    </a>
                </div>

                <div className="col m1">
                    <a href="https://www.linkedin.com/in/salvador-chavez-302ba7198/">
                    <img className="responsive-img" alt="Linkedin" src="https://sal-c.github.io/Portfolio/assets/images/LinkedIn-Icon.png" width="60" height="60"></img>
                    </a>
                </div>

            </div>
      </div>
    );
  }
}

export default ImgLink;