import React from "react";

function Benifit() {
  return (
    <div className="h-full bg-white px-4 py-8 lg:px-32 lg:py-20 ">
      <div className="items-center gap-10  ">
        <div className="flex flex-col gap-4 mb-2">
          <span className="uppercase text-primary-500">Why use spend.in</span>
          <h3 className="text-3xl font-bold">Easy, Simple, Affordable</h3>
        </div>
        <p className="text-secondary-400 text-sm lg:text-l">
          Our platform helps your business in managing <br /> expenses. These
          are some of the reasons why you <br /> should use our platform in
          managing business finances.
        </p>
      </div>

      <div className="grid justify-center grid-cols-1 lg:grid-cols-3  gap-8 w-full px-4 py-8">
        <div className="flex flex-col gap-2">
          <img src="./assets/images/benifit-1.svg" alt="benifit image" />
          <span className="text-secondary-900 font-medium">
            Automatic Invoice Payment
          </span>
          <p className="text-secondary-400 text-sm">
            No need to pay manually, we provide automatic invoice payment
            service! Set a payment schedule and you're done, it's that easy!
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <img src="./assets/images/benifit-2.svg" alt="benifit image" />
          <span className="text-secondary-900 font-medium">
            Clear payment history
          </span>
          <p className="text-secondary-400 text-sm">
            Still writing manual expenses? Our platform breaks down every
            expense you log down to the millisecond!
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <img src="./assets/images/benifit-3.svg" alt="benifit image" />
          <span className="text-secondary-900 font-medium">
            Use of multi-card payments
          </span>
          <p className="text-secondary-400 text-sm">
            Have more than 1 bank account or credit/debit card? Our platform is
            already integrated with many banks around the world, for easier
            payments!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benifit;
