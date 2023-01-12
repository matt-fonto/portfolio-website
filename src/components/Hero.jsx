import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Hero = ({ sendEmail }) => {
  return (
    <div className="h-[100vh] flex flex-col justify-center align-middle items-center tracking-[2px] text-left">
      <div className="" data-aos="fade-up">
        <h2 className="text-lg text-teal-300 font-openSans tracking-[2px] mb-4">
          Hi, my name is
        </h2>
        <h1 className="text-6xl text-gray-200 font-bold font-bitter mb-4">
          Matthew Fontoura.
        </h1>
        <h1 className="text-4xl text-gray-400 font-bold font-openSans track mb-4">
          Crafting solutions, one line at a time.
        </h1>
        <p className="w-[70%] text-gray-400 font-openSans">
          From a CEO to a software engineer. I'm specializing in building apps
          which are dynamic, intuitive and provide a cool digital experience
        </p>

        <div>
          <button
            className="mt-10 border rounded border-teal-400 h-[7vh] w-[20vh] font-bold font-bitter hover:scale-105 duration-500"
            onClick={sendEmail}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
