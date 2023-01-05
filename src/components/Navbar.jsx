import React, { useEffect, useState } from "react";
import "../../src/index.css";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div>
      <nav
        className={`bg-[#222] ${
          visible ? "nav active" : "nav hidden"
        } shadow-md shadow-[#111]`}
      >
        {/* Logo */}
        <div className="w-[50%]">
          <h2 className="">LOGO</h2>
        </div>

        {/* Links */}
        <div className="flex">
          <ul className="flex gap-4 text-sm font-bitter tracking-wider items-center">
            <li>
              <span className="font-bitter pr-1 text-teal-300">01.</span>
              <a
                href=""
                className="font-openSans text-gray-200 hover:text-teal-300 duration-500"
              >
                Projects
              </a>
            </li>
            <li>
              <span className="font-bitter pr-1 text-teal-300">02.</span>
              <a
                href=""
                className="font-openSans text-gray-200 hover:text-teal-300 duration-500"
              >
                Skills
              </a>
            </li>
            <li>
              <span className="font-bitter pr-1 text-teal-300">03.</span>
              <a
                href=""
                className="font-openSans text-gray-200 hover:text-teal-300 duration-500"
              >
                Experience
              </a>
            </li>
            <li>
              <span className="font-bitter pr-1 text-teal-300">04.</span>
              <a
                href=""
                className="font-openSans text-gray-200 hover:text-teal-300 duration-500"
              >
                About
              </a>
            </li>
            <li>
              <span className="font-bitter pr-1 text-teal-300">05.</span>
              <a
                href=""
                className="font-openSans text-gray-200 hover:text-teal-300 duration-500"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="border rounded border-teal-400 h-8 w-[70px] font-bold hover:scale-105 duration-500 ml-5">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
