import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useState, useEffect } from "react";
import AnimatedLetters from "./AnimateLetters";
import { Link } from "react-scroll";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "M",
    "a",
    "y",
    "a",
    "n",
    "k",
    " ",
    "T",
    "h",
    "a",
    "k",
    "u",
    "r",
  ];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  }, []);

  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-[#0a192f] flex justify-aro align-center"
      >
        {/* Container */}
        <div className="lg:flex-1">
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600 text-xl">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={1}
              />
            </h1>
            <br />
            <h2 className="text-xl sm:text-2xl font-bold text-[#8892b0]">
              Full Stack Developer/ ML Enthusiast/ Freelancer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
            <div>
              <Link to="work" smooth={true} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
