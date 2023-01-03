import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

const FixedMenus = () => {
  return (
    // container
    <div className="fixed min-h-screen w-full">
      {/* left */}
      <div className="absolute left-10 bottom-1 flex justify-center">
        {/* line */}
        <div className="w-[1px] h-[20vh] bg-gray-200" />
        {/* Icons */}
        <div className="flex flex-col text-2xl absolute bottom-[22vh]">
          <FiGithub className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
          <SlSocialLinkedin className="mt-5 hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </div>
      </div>
      {/* right */}
      <div className="absolute right-10 bottom-1 flex justify-center">
        <div className="w-[1px] h-[20vh] bg-gray-200" />
        {/* text */}
        <div className="absolute bottom-[30vh]">
          <a href="mateus.fonto@gmail.com">
            <p className="font-bitter text-sm hover:-translate-y-1 duration-500 hover:text-teal-400 rotate-90">
              mateus.fonto@gmail.com
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FixedMenus;
