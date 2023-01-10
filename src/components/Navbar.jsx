import React, { useEffect, useState } from "react";
import "../../src/index.css";

import { HiOutlineCode } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  // function to calculate the scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  // useEffect to measure the scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <nav
        className={`md:flex md:items-center ${visible ? "nav" : "nav hidden"}`}
      >
        {/* Logo */}
        <div className="w-1/2 text-2xl text-teal-300">
          <a href="/">
            <HiOutlineCode />
          </a>
        </div>

        {/* Links */}
        <div>
          <Sidebar />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
