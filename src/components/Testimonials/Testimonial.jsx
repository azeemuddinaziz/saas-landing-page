import React from "react";
import Card from "./Card";

function Testimonial() {
  return (
    <div className="px-4 py-8 lg:px-32 lg:py-20">
      <div className="flex flex-col gap-4 lg:text-center mb-12">
        <span className="text-primary-500 uppercase">What they say</span>
        <h4 className="text-3xl text-white font-bold">Our User Kind Words</h4>
        <p className="text-secondary-400 font-lighter">
          Here are some testimonials from our user after using Spend.In to
          manage their business expenses.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card
          tagLine="It's just incredible!"
          comment="It's just 1 month since I'm using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!"
          imageSrc="./assets/images/testimonial-1.svg"
          name="Jimmy Bartney"
          designation="Product Manager at Picko Lab"
        />

        <Card
          tagLine="Satisfied User Here!"
          comment="Never thought that with Spend.In managing my business expenses is so easy! Been using this platform for 3 months and still counting!"
          imageSrc="./assets/images/testimonial-2.svg"
          name="Natasha Romanoff"
          designation="Black Widow"
        />

        <Card
          tagLine="No doubt, Spend.In is the best!"
          comment="“The best”! That's what I want to say to this platform, didn't know that there's a platform to help you manage your business expenses like this! Very recommended to you who have a big business!"
          imageSrc="./assets/images/testimonial-3.svg"
          name="Moritika Kazuki"
          designation="Finance Manager at Mangan"
        />
      </div>
    </div>
  );
}

export default Testimonial;
