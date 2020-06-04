import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
        <div>
            <div className="row contact-form" id="portfolio">
                <div className="col s2 m3"></div>
                <div className="col s9 m6 title"><h2>Portfolio</h2></div>
            </div>

            <div className="row">

                <div className="col s2 m3"></div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Leftovers"src="https://sal-c.github.io/Portfolio/assets/images/Leftovers-Preview.png"></img>
                        <span className="card-title" id="project-title">Leftovers</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://jrock312.github.io/leftovers/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/Jrock312/leftovers">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Password Generator"src="https://sal-c.github.io/Portfolio/assets/images/Password-Generator-Preview.png"></img>
                        <span className="card-title" id="project-title">Password Generator</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://sal-c.github.io/Password-Generator/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/Sal-C/Password-Generator">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Weather Dashboard" src="https://sal-c.github.io/Portfolio/assets/images/Weather-Dashboard-Preview.png"></img>
                        <span className="card-title" id="project-title">Leftovers</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://sal-c.github.io/Weather-Dashboard/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/Sal-C/Weather-Dashboard">Github Repo</a>
                    </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col s2 m3"></div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="First Fantasy"src="https://sal-c.github.io/Portfolio/assets/images/fantasy-preview.png"></img>
                        <span className="card-title" id="project-title">First Fantasy (PhaserJS Game)</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="http://rocky-island-60367.herokuapp.com/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/Sal-C/project2-th-rjs">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Readme Generator"src="https://sal-c.github.io/Portfolio/assets/images/readme-preview.png"></img>
                        <span className="card-title" id="project-title">Password Generator</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a>Node App</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/Sal-C/README-Generator">Github Repo</a>
                    </div>
                    </div>
                </div>

                <div className="col s12 m2">
                    <div className="card">
                    <div className="card-image">
                        <img alt="Note Taker"src="https://sal-c.github.io/Portfolio/assets/images/note-preview.png"></img>
                        <span className="card-title" id="project-title">Note Taker</span>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="http://rocky-island-60367.herokuapp.com/">Website</a>
                    </div>
                    <div className="card-action" id="card-link">
                        <a href="https://github.com/Sal-C/Note-Taker-App">Github Repo</a>
                    </div>
                    </div>
                </div>
            </div>

            

            



      </div>
    );
  }
}

export default Portfolio;