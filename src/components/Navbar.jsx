import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [cartTotal, setCartTotal] = useState([]);

  useEffect(() => {
    axios
      .get(`https://liquorstorev1.pythonanywhere.com/productCart`)
      .then((response) => {
        setCartTotal(response.data.length);
      });
  }, []);
  return (
    <div>
      <nav className="nav flex flex-wrap items-center justify-between px-4 bg-[#060606] text-white">
        <div className="w-32">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
        >
          <span className="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li className="border-t md:border-none">
            <Link
              to="/"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
            >
              Home
            </Link>
          </li>

          <li className="border-t md:border-none">
            <Link
              to="/product"
              className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Products
            </Link>
          </li>

          {localStorage.getItem("user") === null ? (
            ""
          ) : (
            <li className="border-t md:border-none">
              <a
                href="/blog/"
                className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
              >
                Cart <span>{cartTotal}</span>
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
