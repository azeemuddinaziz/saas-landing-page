import React from "react";
import Feature from "./Feature";
import Button from "../ui/Button/Button";

function PlanCard({
  label,
  iconSrc,
  tagLine,
  price,
  description,
  data,
  buttonText,
}) {
  console.log(data);
  return (
    <div className="flex flex-col gap-12 w-full bg-secondary-100 rounded-xl p-6">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <img src={iconSrc} />
          <span className="text-secondary-700 font-medium text-xl">
            {label}
          </span>
        </div>
        <p className="text-sm text-secondary-400 font-extralight mb-4">
          {tagLine}
        </p>

        <div className="flex gap-1 items-center mb-4">
          <span className="text-2xl font-bold ">{price}</span>
          <span className="text-secondary-400 font-extralight">/month</span>
        </div>

        <p className="text-sm text-secondary-700 font-extralight mb-4 ">
          {description}
        </p>

        <div className="flex flex-col gap-2">
          {data &&
            data.map((item, index) => {
              console.log(item);
              return (
                <Feature
                  key={index}
                  label={item.label}
                  included={item.included}
                />
              );
            })}
        </div>
      </div>
      <div className="w-full">
        <Button
          label={buttonText}
          state={"primary"}
          className={"text-xs hover:text-primary-500 hover:border-primary-500"}
        />
      </div>
    </div>
  );
}

export default PlanCard;
