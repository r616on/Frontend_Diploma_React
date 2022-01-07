import React from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import About from "../../organisms/About/About";
import HowItWorks from "../../organisms/HowItWorks/HowItWorks";
import Reviews from "../../organisms/Reviews/Reviews";

function Index() {
  return (
    <PageTemplate>
      <About />
      <HowItWorks />
      <Reviews />
    </PageTemplate>
  );
}

export default Index;
