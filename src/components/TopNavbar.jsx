import React from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { GrTwitter, GrFacebookOption, GrInstagram } from "react-icons/gr";
import { BsDribbble } from "react-icons/bs";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  const logout = () => {
    localStorage.removeItem("user");
  };
  return (
    <>
      <div className="bg-[#A23F25] flex flex-col md:flex-row md:justify-between md:items-center px-2 md:px-4">
        <div className="text-[#C18660]">
          <ul className="flex flex-row gap-6 md:gap-3">
            <li className="flex items-center gap-2">
              <span>
                <FaPhoneAlt />
              </span>
              +00 1234 567
            </li>
            <li className="flex items-center gap-2">
              <span>
                <FaPaperPlane />
              </span>
              youremail@email.com
            </li>
          </ul>
        </div>
        <div className="flex justify-around pt-3 pb-2 md:py-1">
          <ul className="flex items-center text-sm gap-3 mr-4">
            <li className="text-white">
              <a href="#">
                <GrFacebookOption />
              </a>
            </li>
            <li className="text-white">
              <a href="#">
                <GrTwitter />
              </a>
            </li>
            <li className="text-[#F3EAEA]">
              <a href="#">
                <GrInstagram />
              </a>
            </li>
            <li className="text-[#FFF0D5]">
              <a href="#">
                <BsDribbble />
              </a>
            </li>
          </ul>

          {/* signup and sign in */}
          <div className="flex gap-3 uppercase">
            <div className="text-[#ffff63] hover:text-[#f1f605] ">
              <Link to="/signup">sign up</Link>
            </div>
            {localStorage.getItem("user") === null ? (
              <div className="text-[#ffff63] hover:text-[#f1f605] ">
                <Link to="/signin">log in</Link>
              </div>
            ) : (
              <div
                className="text-[#ffff63] hover:text-[#f1f605]"
                onClick={logout}
              >
                <Link to="/signin">log out</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
