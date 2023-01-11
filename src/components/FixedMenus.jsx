import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const FixedMenus = ({ sendEmail }) => {
  return (
    <div className="block border-r border-gray-300 h-[300px] w-[150px] fixed top-[30vh] flex-col justify-center items-center gap-y-8">
      {/* left */}
      <div className="flex flex-col justify-evenly items-center h-full">
        <a href="https://github.com/softEngMatthew" target="_blank">
          <FiGithub className="text-gray-300 text-2xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/mateus-fontoura-701433213/"
          target="_blank"
        >
          <SlSocialLinkedin className="text-gray-300 text-2xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </a>

        <button onClick={sendEmail}>
          <HiOutlineMail className="text-gray-300 text-3xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </button>

        <a href="https://www.instagram.com/_fontoura/" target="_blank">
          <BsInstagram className="text-gray-300 text-2xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </a>

        {/* <div className="w-[1px] h-[150px] bg-gray-200" /> */}
      </div>
    </div>
  );
};

export default FixedMenus;
