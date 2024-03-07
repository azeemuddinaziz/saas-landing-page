import React from "react";

function Card({ tagLine, comment, imageSrc, name, designation }) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg bg-secondary-500 text-white">
      <div className="flex flex-col h-full gap-6 border-b-[.5px] border-secondary-300 border-opacity-30">
        <span className="text-xl font-bold text-secondary-200">{tagLine}</span>
        <p className=" text-opacity-70 text-secondary-100 font-extralight mb-6">
          {comment}
        </p>
      </div>

      <div className="flex items-center justify-start gap-6 pt-4">
        <div>
          <img src={imageSrc} className="rounded-lg" />
        </div>

        <div className="flex flex-col gap-1">
          <span>{name}</span>
          <p className="text-secondary-300 text-sm font-extralight">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
