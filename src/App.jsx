import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Benifit from "./components/Benifit/Benifit";
import Footer from "./components/Footer/Footer";
import CtaAboveFooter from "./components/CtaAboveFooter/CtaAboveFooter";
import Pricing from "./components/Pricing/Pricing";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import SuccessStories from "./components/SuccessStories/SuccessStories";
import Testimonial from "./components/Testimonials/Testimonial";

function App() {
  return (
    <div className="relative bg-secondary-700 max-w-[1440px] m-auto">
      <Header />
      <Hero />
      <Benifit />
      <HowItWorks />
      <SuccessStories />
      <Testimonial />
      <Pricing />
      <CtaAboveFooter />
      <Footer />
    </div>
  );
}

export default App;
