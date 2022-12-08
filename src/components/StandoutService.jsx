import React from "react";

// images
import support from "../assets/support.png";
import cashback from "../assets/cashback.png";
import freedelivery from "../assets/free-delivery.png";

const StandoutService = () => {
  return (
    <>
      <div className="bg-[#B7472A] flex flex-col md:flex-row md:px-10 lg:px-16">
        <div className="p-7 lg:flex lg:justify-center">
          <div className="min-w-fit lg:mt-9">
            <img src={support} className="w-16 h-16 m-2" alt="support" />
          </div>
          <div>
            <h2 className="text-1xl text-white uppercase pt-6 pb-2">
              online support 24/7
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              molestias placeat pariatur, consequuntur cupiditate amet quas!
            </p>
          </div>
        </div>
        <div className="p-7 lg:flex lg:justify-center bg-[#AB4227]">
          <div className="min-w-fit lg:mt-9">
            <img src={cashback} className="w-16 h-16 m-2" alt="cashback" />
          </div>
          <div>
            <h2 className="text-1xl text-white uppercase pt-6 pb-2">
              money back guarantee
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              dicta necessitatibus molestiae blanditiis eligendi eaque odio!
            </p>
          </div>
        </div>
        <div className="p-7 lg:flex lg:justify-center bg-[#A23F25]">
          <div className="min-w-fit lg:mt-9">
            <img src={freedelivery} className="w-16 h-16 m-2" alt="freedelivery" />
          </div>
          <div>
            <h2 className="text-1xl text-white uppercase pt-6 pb-2">
              free shipping &amp; return
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              molestias placeat pariatur, consequuntur cupiditate amet quas!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StandoutService;
