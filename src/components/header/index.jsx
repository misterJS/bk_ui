import React, { memo, useState } from "react";
import { Link } from "react-router-dom";

const HeaderMemo = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 bg-gray-900">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-16 relative"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/2203px-Burger_King_1969_logo.svg.png"
            />
          </Link>
          <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="md:flex space-x-4 ml-4">
              <li>
                <a href="#" className="text-white">
                  <p className="primary-orange-font text-xs">Delivery</p>
                  <p>Order</p>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <p className="primary-orange-font text-xs">Get Fresh</p>
                  <p>Promotions</p>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <p className="primary-orange-font text-xs">Exlusive</p>
                  <p>Large Order</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
        <nav className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="md:flex space-x-4">
            <li className="py-8">
              <a href="#" className="text-white">
                Login
              </a>
            </li>
            <li className="primary-button px-4 w-14 h-[full] py-8 top-0">
              <a href="#" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const Header = memo(HeaderMemo);
