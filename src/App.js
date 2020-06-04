import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function BasicExample() {
  return (
    <Router>
      <div>
      <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div>
      <Bio />
    </div>
  );
}

function BioPage() {
  return (
    <div>
      <Bio />
    </div>
  );
}

function PortfolioPage() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
