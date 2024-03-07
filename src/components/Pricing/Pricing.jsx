import React from "react";
import PlanCard from "./PlanCard";

function Pricing() {
  return (
    <div id="pricing" className="bg-white p-6 lg:px-32 lg:py-20 h-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-sm text-secondary-400 font-extralight">
          Choose a plan that suits your business needs
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <PlanCard
          label="Free"
          iconSrc="./assets/icons/plan-card-heart.svg"
          tagLine="Perfect plan to get started"
          price="$0"
          description="A free plan grants you access to some cool features of Spend.In."
          data={[
            { label: "Sync across device", included: true },
            { label: "5 workspace", included: true },
            { label: "Collaborative workspace", included: true },
            { label: "Sharing permission", included: false },
            { label: "Admin tools", included: false },
            { label: "100+ integrations", included: false },
          ]}
          buttonText="Get Your Free Plan"
        />

        <PlanCard
          label="Pro"
          iconSrc="./assets/icons/plan-card-crown.svg"
          tagLine="Perfect plan for professionals!"
          price="$12"
          description="For professional only! Start arranging your expenses with our best templates."
          data={[
            { label: "Everything in Free Plan", included: true },
            { label: "Unlimited workspace", included: true },
            { label: "Collaborative workspace", included: true },
            { label: "Sharing permission", included: true },
            { label: "Admin tools", included: true },
            { label: "100+ integrations", included: true },
          ]}
          buttonText="Get Started"
        />

        <PlanCard
          label="Ultimate"
          iconSrc="./assets/icons/plan-card-thunder.svg"
          tagLine="Best suits for great company!"
          price="$33"
          description="If you a finance manager at big  company, this plan is a perfect match."
          data={[
            { label: "Everything in Pro Plan", included: true },
            { label: "Daily performance reports", included: true },
            { label: "Dedicated assistant", included: true },
            { label: "Artificial intelligence", included: true },
            { label: "Marketing tools & automations", included: true },
            { label: "Advanced security", included: true },
          ]}
          buttonText="Get Started"
        />
      </div>
    </div>
  );
}

export default Pricing;
