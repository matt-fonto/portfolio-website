import React from "react";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
// import Image from "next/image";
import avatar from "../utils/resources/images/avatar.png";

const Header = () => {
  return (
    <div className="h-screen xl:h-[90vh]">
      <div>
        {/* text container */}
        <div className="text-center p-2 xl:mt-10">
          <h2 className="uppercase tracking-[10px] mt-10 text-5xl my-2 text-teal-400 font-medium">
            Matt
          </h2>

          {/* image */}
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 mb-10 flex justify-center">
            <img src={avatar} alt="avatar" />
          </div>

          <h3 className="uppercase tracking-[2px] text-2xl my-2 font-medium">
            Front-End <span className="text-teal-400">Software Developer</span>
          </h3>
          <p className="text-lg my-10 leading-8 text-neutral-400 tracking-[2px]">
            Former English Teacher and CEO, who’s reawakened his passion for
            coding, computer science, and design.
          </p>
        </div>
        {/* logos */}
        <div className="text-5xl flex justify-center gap-16  text-neutral-400">
          <a href="#" className="hover:text-teal-400 duration-500">
            <AiFillLinkedin />
          </a>
          <a href="#" className="hover:text-teal-400 duration-500">
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
