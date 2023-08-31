/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom/cjs/react-router-dom";
// import { motion } from "framer-motion";
import ContactUs from './Segments/ContactUs';
import Home from './Pages/Home';
import Signup from './Pages/Signup.js';
import Jobs from './Pages/Jobs';
import NavBar from './Segments/NavBar'

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class RoutingThing extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*
          <Route path="/login">
            <Login />
          </Route>
          */}
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
        </Switch>
        <ContactUs />
      </BrowserRouter>
    );
  }
}

export default RoutingThing;
