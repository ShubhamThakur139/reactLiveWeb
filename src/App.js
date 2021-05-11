import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/service" exact component={Service} />
        <Route path="/contact" exact component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
