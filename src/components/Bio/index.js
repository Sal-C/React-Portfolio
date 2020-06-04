import React, { Component } from "react";

class Bio extends Component {
  render() {
    return (
        <div>
            <div className="row" id="bio">
                <div className="col s2 m3"></div>
                <div className="col s9 m6 title"><h2>Bio</h2></div>
            </div>
            <div className="row bio">
                <div className="col s2 m3"></div>
                <div className="col s9 m6">
                    I am a full-stack developer from the city of Sacramento. At an early age, an obsession with aesthetics
                    and personalization in software lead to a livelihood where I construct web applications and express my creativity.
                    Wanting to have a firm footing into the industry, I joined the UC Davis Coding Bootcamp to acquire the necessary skills
                    to succeed in the never-ending study as a web developer. I'm still a beginner, but if my education taught me anything,
                    it's an unwavering knack for learning.
                </div>
                <div className="col s1"></div>
        </div>
      </div>
    );
  }
}

export default Bio;