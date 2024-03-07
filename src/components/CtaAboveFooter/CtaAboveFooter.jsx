import React from "react";
import Button from "../ui/Button/Button";

function CtaAboveFooter() {
  return (
    <div className="h-full flex flex-col lg:flex-row items-center lg:items-start gap-8 px-4 py-8 lg:pl-32 lg:py-20 overflow-hidden">
      <div className="flex flex-col items-start justify-between w-full text-secondary-100">
        <div className="h-full w-full flex flex-col justify-between items-center lg:items-start text-center lg:text-left">
          <span className="uppercase text-primary-400 tracking-wider mb-2">
            Download Now
          </span>
          <h2 className="text-3xl font-bold mb-2">
            Start Track Your <br />
            Business Expenses Today
          </h2>
          <p className="text-sm font-extralight mb-6">
            Are you ready to make your business more organised?
            <br /> Download Spend.In now!
          </p>
        </div>

        <div className="h-full w-full flex items-end">
          <Button
            state="primary"
            label="Get free demo"
            className="w-full lg:w-max origin-left lg:origin-center"
          />
        </div>
      </div>

      <div className="w-full relative ">
        <img
          src="./assets/images/cta-above-footer.png"
          className="lg:absolute"
        />
      </div>
    </div>
  );
}

export default CtaAboveFooter;
