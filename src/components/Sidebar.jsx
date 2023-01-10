import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { navlinks } from "../utils/constants";

const Sidebar = () => {
  const [burger, setBurger] = useState(true);
  //   const toggleVisible = () => setVisible(!visible);

  return (
    <div>
      <GiHamburgerMenu
        className="focus:outline-none focus:shadow-outline-teal"
        // onClick={toggleVisible}
      />
      <ul className="md:flex md:items-center gap-4 text-sm font-bitter tracking-wide">
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
