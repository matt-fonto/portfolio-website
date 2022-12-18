import React from "react";
import { CgDarkMode } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="px-20 bg-neutral-900 h-[80px]">
      <nav className="py-2 flex justify-between  text-zinc-100 h-[100%]">
        <h1 className="text-xl flex items-center">
          developedBy<span className="text-teal-400 font-bold">Matt</span>
        </h1>
        <ul className="flex items-center">
          {/* dark/light mode buton */}
          <li>
            <CgDarkMode className="cursor-pointer text-2xl hover:text-teal-400 duration-500" />
          </li>
          {/* resume */}
          <li>
            <a
              className="border rounded border-teal-500 p-2 font-bold hover:bg-teal-400 duration-700 ml-8"
              href="#"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
