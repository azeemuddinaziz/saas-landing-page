import React, { useState } from "react";
import Feature from "./Feature";

function SuccessStories() {
  const [isWithSpendIn, setIsWithSpendIn] = useState(true);

  return (
    <div id="success-stories" className="bg-white px-8 py-8 lg:px-32 lg:py-20">
      <div className="flex flex-col gap-4 mb-8">
        <span className="text-primary-500 uppercase">
          Increase productivity
        </span>
        <h4 className="text-3xl text-secondary-700 font-bold">
          Reduce Time in Doing Manual Work Managing Expenses
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col gap-4 text-secondary-700">
          <div className="flex bg-secondary-100 rounded-full lg:w-max h-fit mb-8">
            <button
              onClick={() => setIsWithSpendIn(true)}
              className={`w-full ${
                isWithSpendIn
                  ? "bg-primary-500 text-white font-medium"
                  : "bg-transparent text-secondary-300 font-extralight"
              }  px-6 py-4 rounded-full text-sm  text-nowrap transition-all`}
            >
              With Spend.in
            </button>
            <button
              onClick={() => setIsWithSpendIn(false)}
              className={`w-full ${
                !isWithSpendIn
                  ? "bg-primary-500 text-white font-medium"
                  : "bg-transparent text-secondary-300 font-extralight"
              }  px-4 py-2 rounded-full text-sm text-nowrap  transition-all`}
            >
              Without Spend.in
            </button>
          </div>

          {isWithSpendIn && (
            <div className="flex flex-col gap-4 text-secondary-700">
              <span className="text-2xl font-bold">
                Track Business Expenses until its Millisecond
              </span>
              <div className="flex flex-col gap-4">
                <Feature
                  label={
                    "Analyse your business cost easily with group transaction through tagging feature."
                  }
                  className={"text-secondary-700 font-bold"}
                  included
                />
                <Feature
                  label={
                    "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment."
                  }
                  included
                />
                <Feature
                  label={
                    "Arrange your business expenses by date, name, etc.,  with just one click."
                  }
                  included
                />
              </div>
            </div>
          )}

          {!isWithSpendIn && (
            <div className="flex flex-col gap-4 text-secondary-700">
              <span className="text-2xl font-bold">
                Taking too long to tidy up administrative files makes it
                unproductive
              </span>
              <div className="flex flex-col gap-4">
                <Feature
                  label={
                    "Complex recording process due to every administrative file in a different place."
                  }
                />
                <Feature
                  label={
                    "Need more effort to pay manually one by one invoice because there is no payment accommodation."
                  }
                />
                <Feature
                  label={
                    "Manual data arranging needs a long time because the different months/years are not in the same place."
                  }
                />
              </div>
            </div>
          )}
        </div>

        <div>
          {isWithSpendIn ? (
            <img src="./assets/images/success-stories-1.svg" />
          ) : (
            <img src="./assets/images/success-stories-2.svg" />
          )}
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
