import React from "react";

function Footer() {
  return (
    <div className="h-full bg-white p-8 lg:px-32 lg:py-20">
      <div className="flex justify-center flex-col">
        <div className="flex flex-col justify-center lg:items-start lg:flex-row lg:justify-between gap-10 lg:gap-32 border-b-2 border-secondary-400 border-opacity-20 pb-8 mb-4">
          <div className="flex gap-4 lg:flex flex-col lg:items-start">
            <img
              src="./assets/icons/logo-with-name-footer.svg"
              alt="company logo"
              className="w-40"
            />

            <p className="text-sm text-secondary-400">
              Data visualisation,
              <br /> and expense management
              <br /> for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:flex lg:items-start lg:gap-12">
            <div className="flex flex-col gap-4">
              <span className="font-bold text-secondary-500">Product</span>

              <ul className="flex flex-col gap-2 text-secondary-400">
                <li className="text-sm hover:">
                  <a href="#">Digital Invoice</a>
                </li>
                <li className="text-sm hover:">
                  <a href="#">Insights</a>
                </li>
                <li className="text-sm hover:">
                  <a href="#">Reimbursments</a>
                </li>
                <li className="text-sm hover:">
                  <a href="#">Virtual Assistant</a>
                </li>
                <li className="text-sm hover:">
                  <a href="#">Artificial Intelligence</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-secondary-500">Company</span>

              <ul className="flex flex-col gap-2 text-secondary-400">
                <li className="text-sm hover:font-medium">
                  <a href="#">About Us</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Newsletters</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Our Partners</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Career</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-secondary-500">Resources</span>

              <ul className="flex flex-col gap-2 text-secondary-400">
                <li className="text-sm hover:font-medium">
                  <a href="#">Blog</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Pricing</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">FAQ</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Events</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Ebook & Guide</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-bold text-secondary-500">Follow Us</span>

              <ul className="flex flex-col gap-2 text-secondary-400">
                <li className="text-sm hover:font-medium">
                  <a href="#">Linkedin</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Twitter</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Instagram</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">Facebook</a>
                </li>
                <li className="text-sm hover:font-medium">
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-between text-sm text-secondary-300">
          <div className="flex flex-col lg:flex-row gap-4 ">
            <span>
              <a href="#">Privacy</a>
            </span>
            <span className="lg:border-x-2 border-text-secondary-300-500 lg:px-4">
              <a href="#">Terms & Conditions</a>
            </span>
            <span>
              <a href="#">Cookie Policy</a>
            </span>
          </div>
          <div>
            <span>
              <a href="#">© spend.in 2024</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
