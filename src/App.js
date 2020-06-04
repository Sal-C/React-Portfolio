import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bio">
            <BioPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
    </div>
  );
}

function BioPage() {
  return (
    <div>
    </div>
  );
}

function PortfolioPage() {
  return (
    <div>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
    </div>
  );
}
