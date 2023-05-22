import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


import Home from "./components/Blank/Blank";
import About from "./components/About/About";
import contact from "./components/contact/contact";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Home } />
          <Route exact path = "/About.js" component = { About } />
          <Route exact path = "/contact.js" component = { contact } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
