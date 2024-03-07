import React from "react";

function Button({ label, state, className }) {
  const primary =
    "bg-primary-500 text-white border-transparent hover:border-primary-200 hover:bg-transparent hover:text-primary-200";
  const secondary = "bg-secondary-500  text-secondary-200 ";

  return (
    <button
      className={`
      w-full px-6 py-2  border-2 border-transparent rounded-full hover:scale-90 transition-all duration-200
      ${state === "primary" ? primary : secondary}  
      ${className} `}
    >
      {label}
    </button>
  );
}

export default Button;
