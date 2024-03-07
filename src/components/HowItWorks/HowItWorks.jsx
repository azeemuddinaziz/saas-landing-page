import React from "react";
import Button from "../ui/Button/Button";

function HowItWorks() {
  return (
    <div id="how-it-works" className="px-8 py-8 lg:px-32 lg:py-20">
      <div className="flex flex-col gap-8 text-center mb-8">
        <span className="text-primary-500 uppercase">How it works</span>
        <h4 className="text-3xl text-white font-bold">
          Few Easy Steps and Done
        </h4>
        <p className="text-secondary-400 font-lighter">
          In just few easy step, you are all set to manage your business
          finances. Manage all expenses with Spend.In all in one place.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 mb-12">
        <div className="flex flex-col gap-4 items-center">
          <img src="./assets/images/step-1.svg" />
          <span className="text-white font-light text-center">
            Register your Spend.In account.
          </span>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <img src="./assets/images/step-2.svg" />
          <span className="text-white font-light text-center">
            Fill in the list of your business expenses.
          </span>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <img src="./assets/images/step-3.svg" />
          <span className="text-white font-light text-center">
            Done, let’s continue the work.
          </span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-center gap-4 mb-10">
        <Button label="Get Free Demo" state="primary" className={"lg:w-max"} />
        <Button label="See Pricing" state="secondary" className={"lg:w-max"} />
      </div>
    </div>
  );
}

export default HowItWorks;
