import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

const Header = () => {
  return (
    <div className="h-[100vh] flex w-full justify-center items-center tracking-[2px]">
      <div className="w-[50%]">
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
      </div>
    </div>
  );
};

export default Header;
