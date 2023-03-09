import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { navlinks } from "../utils/constants";

const Sidebar = ({ visible }) => {
  const [burger, setBurger] = useState(false);

  return (
    // nav container
    <div className="">
      <div
        onClick={() => setBurger(!burger)}
        className="w-full relative text-gray-300 text-2xl md:hidden duration-500 hover:text-teal-300"
      >
        {burger ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </div>
      {/* links */}
      <ul
        className={`md:flex gap-x-4 md:items-center absolute md:static transition-all duration-300 ease-in ${
          burger
            ? "mt- 8 flex flex-col align-middle pl-4 justify-evenly h-[40vh] w-1/2 rounded-md right-0 glass-background"
            : "hidden"
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
                className="font-bitter text-sm text-gray-200 hover:text-teal-300 duration-500 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <button
          className={`font-bitter hover:scale-105 duration-500 ml-2 w-[80px] border rounded border-teal-400  text-gray-300 font-bold ${
            visible ? "h-[35px]" : "h-[30px]"
          }`}
        >
          <a
            href="https://drive.google.com/file/d/1MCyjB0PrqT8TdqQvy-863WzBhsmzGvGw/view?usp=share_link"
            target="_blank"
          >
            Resume
          </a>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
