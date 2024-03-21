import React from "react";
import Button from "../ui/Button/Button";

function Hero() {
  return (
    <div id="hero" className="relative h-full bg-secondary-700 p-4 lg:px-32 lg:py-12 overflow-hidden">
      {/* For decoration purspose */}
      <div>
        <img
          src="./assets/vectors/hero-circle.svg"
          alt="decor-item"
          className="absolute top-1/2 -left-1/2 "
        />
        <img
          src="./assets/vectors/hero-circle.svg"
          alt="decor-item"
          className="absolute -top-1/2 -right-1/2 "
        />
      </div>

      <h1 className="lg:text-center text-4xl text-left lg:text-6xl font-bold text-white lg:tracking-[-2px] leading-normal mb-1 lg:mb-6">
        All your business <br /> expenses in one place.
      </h1>

      <p className="text-left lg:text-center text-l lg:text-xl text-secondary-300 font-extralight mb-4 lg:mb-10">
        Your one-stop finance empower platform. <br /> Manage all your business
        expenses with our supafast app.
      </p>

      <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-4 mb-10">
        <Button label="Get Free Demo" state="primary" className={"lg:w-max"} />
        <a href="#pricing"><Button label="See Pricing" state="secondary" className={"lg:w-max"} /></a>
      </div>

      <img src="./assets/images/dashboard-preview.png" />
    </div>
  );
}

export default Hero;
