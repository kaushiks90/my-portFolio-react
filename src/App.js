import React from "react";
import "./App.scss";
import Headers from "./components/common/header";
import Footer from "./components/common/footer";

import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import ContactMe from "./components/contact/contactMe";

function App() {
  return (
    <div className="App">
      <Headers />
      <Switch>
        <Route path="/home" component={Home} />{" "}
        <Route path="/about" component={About} />{" "}
        <Route path="/contactMe" component={ContactMe} />{" "}
        <Route path="/work" component={Work} />{" "}
        <Redirect from="/" exact to="/home" />
      </Switch>{" "}
      <Footer> </Footer>{" "}
    </div>
  );
}

export default App;
