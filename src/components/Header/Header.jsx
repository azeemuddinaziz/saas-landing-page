import React, { useState } from "react";
import Button from "../ui/Button/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      id="navbar"
      className=" bg-secondary-700 bg-opacity-70 max-h-20 p-4 lg:py-10 lg:px-32 flex items-center justify-between lg:justify-center gap-10 text-white text-sm border-b-[1px] border-primary-100 border-opacity-5 sticky top-0 z-10 backdrop-filter backdrop-blur-lg"
    >
      <div className=" z-10">
        <img
          src="./assets/icons/logo-with-name.svg"
          alt="brand-logo"
          className="w-9/12 lg:w-full"
        />
      </div>

      <span
        className={`${
          isMenuOpen ? "icon-[mdi--close] " : "icon-[mdi--menu]"
        }  text-4xl lg:hidden cursor-pointer z-10`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></span>

      <ul
        className={`lg:flex justify-center gap-10 w-full text-white items-center ${
          isMenuOpen
            ? "flex flex-col lg:flex-row items-center justify-center absolute inset-0 lg:relative bg-secondary-500 lg:bg-transparent h-screen text-xl"
            : "hidden"
        } `}
      >
        <li className="hover:text-primary-200">
          <a href="#hero" onClick={()=> setIsMenuOpen(false)}>Products</a>
        </li>
        <li className="hover:text-primary-200">
          <a href="#benifit" onClick={()=> setIsMenuOpen(false)}>Benifit</a>
        </li>
        <li className="hover:text-primary-200">
          <a href="#how-it-works" onClick={()=> setIsMenuOpen(false)}>How it works</a>
        </li>
        <li className="hover:text-primary-200">
          <a href="#testimonials" onClick={()=> setIsMenuOpen(false)}>Testimonials</a>
        </li>
        <li className="hover:text-primary-200">
          <a href="#pricing" onClick={()=> setIsMenuOpen(false)}>Pricing</a>
        </li>
      </ul>

      <div className="hidden lg:flex gap-4">
        <button className="hover:text-primary-200 hover:underline">
          Login
        </button>

        <Button label="Get Demo" state="primary" className="w-max" />
      </div>
    </div>
  );
}

export default Header;
