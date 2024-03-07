import React from "react";

function Feature({ label, included, className }) {
  return (
    label && (
      <div className={`flex gap-2  sentence ${className}`}>
        <span
          className={
            included
              ? "icon-[mdi--tick-circle] bg-[#9CD323] min-w-4"
              : "icon-[mdi--close-circle] bg-secondary-400 min-w-4"
          }
        ></span>

        <p className="text-sm text-secondary-700 font-extralight">{label}</p>
      </div>
    )
  );
}

export default Feature;
