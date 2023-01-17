import React from "react";
import { Parallax } from "react-parallax";
import { Slide } from "react-awesome-reveal";
import bg_liquor_1 from "../assets/bg_1.jpg";

const Hero = () => {
  return (
    <div>
      <Parallax
        strength={300}
        blur={{ min: -3, max: 3 }}
        bgImage={bg_liquor_1}
        bgClassName="object-cover"
      >
        <div className="min-h-screen">
          <div className="absolute right-0 left-0 top-16 flex flex-col justify-center items-center min-h-screen -rotate-6">
            <Slide direction="up" delay={500} triggerOnce={true}>
              <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold text-green-400">
                <h1 className="pb-5">
                  Slick <span className="text-white">Choice</span> Destination
                </h1>
                {/* <span className="text-white">Moments</span>. */}
              </div>
              <div className="pt-7">
                <button className="text-white bg-[#B7472A] p-2 rounded-sm px-6 md:px-10 mr-2 text-sm font-semibold hover:drop-shadow-md">
                  Shop Now
                </button>
                <button className="text-white p-2 rounded-sm px-6 md:px-10 border text-sm font-semibold hover:drop-shadow-md">
                  Read more
                </button>
              </div>
            </Slide>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;
