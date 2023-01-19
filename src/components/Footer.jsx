import React from "react";
import { Slide } from "react-awesome-reveal";

// React Icons
import { GrTwitter, GrFacebookOption, GrInstagram } from "react-icons/gr";
import { GoChevronRight } from "react-icons/go";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { BsFillSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1A1A1A] p-3 grid md:gap-3 md:grid-cols-4 md:py-16 md:px-5 lg:p-16 lg:gap-0">
        {/* liquor store */}
        <div className="">
          <h2 className="text-white capitalize my-7 text-3xl">
            <a href="#">
              <span className="uppercase hover:text-[#B7472A] mr-[6px]">
                liquor
              </span>
              <span className="text-[#ffffff4d]">store</span>
            </a>
          </h2>
          <p className="text-[#ffffffe6] text-sm">
            For more information about us click on the Instagram link below 
          </p>
          <Slide direction="up" cascade duration={500} triggerOnce={true}>
            <ul className=" flex gap-5 mt-3">
              {/* <li className="bg-[#B7472A] p-3 rounded-full text-[#DBA395]">
                <a href="#">
                  <GrTwitter />
                </a>
              </li>

              <li className="bg-[#B7472A] p-3 rounded-full text-[#DBA395]">
                <a href="#">
                  <GrFacebookOption />
                </a>
              </li> */}
              <li className="bg-[#B7472A] p-3 rounded-full text-[#DBA395]">
                <a
                  target="_blank"
                  href="https://www.instagram.com/sliquor_limited"
                >
                  <GrInstagram />
                </a>
              </li>
            </ul>
          </Slide>
        </div>

        {/* my accounts */}
        {/* <div className="">
          <h2 className="capitalize my-7 text-2xl text-[#ffffffcc]">
            my accounts
          </h2>
          <ul>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              My account
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Register
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Log in
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              My order
            </li>
          </ul>
        </div> */}

        {/* Information */}
        <div className="">
          <h2 className="capitalize my-7 text-2xl text-[#ffffffcc]">
            information
          </h2>
          <ul>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              About us
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Catalog
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Contact us
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Term &amp; Conditions
            </li>
          </ul>
        </div>

        {/* my accounts */}
        {/* <div className="">
          <h2 className="capitalize my-7 text-2xl text-[#ffffffcc]">
            Quick Link
          </h2>
          <ul>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              New User
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Help Center
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Report Spam
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-2">
                <GoChevronRight />
              </span>
              Faq's
            </li>
          </ul>
        </div> */}

        {/* Question */}
        <div className="">
          <h2 className="capitalize my-7 text-2xl text-[#ffffffcc]">
            have a question?
          </h2>
          <ul>
            <li className="text-[#ffffffcc] flex items-start">
              <span className="mr-6 mt-2 text-slate-50">
                <FiMap size={22} />
              </span>
              Mombasa - Malindi Highway,Behind Naivas Supermarket Next To Shiva
              Mombasa Limited
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer my-3">
              <span className="mr-6">
                <FaPhoneAlt />
              </span>
              +2547 99 777 888
            </li>
            <li className="text-[#ffffff80] flex items-center py-1 cursor-pointer">
              <span className="mr-6">
                <FaPaperPlane />
              </span>
              sliquorltd@gmail.com
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="bg-black text-[#ffffff80] flex justify-center items-center px-11">
        <p className="py-12 md:flex">
          Copyright &copy; {new Date().getFullYear()} All rights reserved
          <span className="hidden md:inline-block mx-1">|</span>
          <span className="md:hidden mx-1">
            <br />
          </span>
          <span className="flex justify-center">
            made with
            <span className="mx-3">
              <BsFillSuitHeartFill />
            </span>
            by
            <a href="#" className="text-white hover:text-[#B7472A] ml-2">
              Douglas Obara
            </a>
          </span>
        </p>
      </div> */}
    </>
  );
};

export default Footer;
