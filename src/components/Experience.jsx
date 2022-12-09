import React from "react";
import about from "../assets/about.jpg";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center md:p-9 lg:p-24">
        <div className="pt-16 w-full md:pt-0 md:w-1/2">
          <img src={about} alt="" className="w-full h-[400px]" />
        </div>
        <div className="md:w-1/2 p-3 md:p-8">
          <Fade direction="up" triggerOnce="true">
            <span className="text-sm text-[#B94B2F]">Since 1905</span>
            <h2 className="text-4xl my-6 font-semibold">
              Desire Meets A New Taste
            </h2>
          </Fade>
          <Fade direction="up" cascade triggerOnce="true">
            <p className="font-thin">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth. <br />
              <br /> On her way she met a copy. The copy warned the Little Blind
              Text, that where it came from it would have been rewritten a
              thousand times and everything that was left from its origin would
              be the word "and" and the Little Blind Text should turn around and
              return to its own, safe country.
            </p>
            <p className="mt-7 text-lg md:text-xl lg:text-2xl">
              <strong className="text-[#B94B2F] mx-2">
                <CountUp end={115} delay={4} />
              </strong>
              <span>Years of Experience In Business</span>
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Experience;
