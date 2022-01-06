import React, { Fragment } from "react";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";
import About from "../../organisms/About/About";
import HowItWorks from "../../organisms/HowItWorks/HowItWorks";
import Reviews from "../../organisms/Reviews/Reviews";
import "./style.scss";

function PageTemplate(props) {
  return (
    <Fragment>
      <Header />
      <About />
      <HowItWorks />
      <Reviews />
      <Footer />
    </Fragment>
  );
}

export default PageTemplate;
