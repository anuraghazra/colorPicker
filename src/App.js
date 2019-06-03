import React, { Fragment } from "react";
import "./App.css";
import Nav from "./components/nav";
import Blue from "./components/blue";
import Green from "./components/green";
import Red from "./components/red";
import Grey from "./components/grey";
import Yellow from "./components/yellow";
import More from "./components/more";
import Contributor from "./components/contributor";
import Footer from "./components/footer";

const App = () => {
  return (
    <Fragment>
      <div className="dv">
        <Nav />
      </div>

      <div className="div1">
        <Blue />
      </div>
      <div className="div2">
        <Green />
      </div>
      <div className="div2">
        <Red />
      </div>
      <div className="div2">
        <Grey />
      </div>
      <div className="div2">
        <Yellow />
      </div>
      <div className="div2">
        <More />
        <div>
          <Contributor />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
