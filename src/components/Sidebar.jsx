import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navlinks } from "../utils/constants";

const Sidebar = () => {
  const [burger, setBurger] = useState(false);

  return (
    // nav container
    <div className="">
      <div
        onClick={() => setBurger(!burger)}
        className="w-full relative text-gray-300 text-2xl md:hidden hover:text-teal-300 duration-500"
      >
        {burger ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      {/* links */}
      <ul
        className={`md:flex gap-x-4 md:items-center absolute md:static transition-all duration-500 ease-in ${
          burger
            ? "absolute top-20 flex flex-col align-middle pl-4 justify-evenly h-[40vh] w-1/4 rounded-md right-0 bg-[#111]"
            : "-left-64"
        }`}
      >
        {navlinks.map((link) => {
          return (
            <li key={link.name}>
              <span className="font-bitter pr-1 text-teal-300">
                {link.num}.
              </span>
              <Link
                activeClass="active"
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-openSans text-gray-200 hover:text-teal-300 duration-500 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <button className="border rounded border-teal-400 h-[40px] w-[80px] font-bold hover:scale-105 duration-500 ml-5 text-gray-300">
          Resume
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
