import React from "react";

function Feature({ label, included }) {
  return (
    label && (
      <div className="flex gap-2 items-center sentence">
        <span
          className={
            included
              ? "icon-[mdi--tick-circle] bg-[#9CD323]"
              : "icon-[mdi--close-circle] bg-secondary-400"
          }
        ></span>

        <p className="text-sm text-secondary-700 font-extralight">{label}</p>
      </div>
    )
  );
}

export default Feature;
