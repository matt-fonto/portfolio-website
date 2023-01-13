import React, { useEffect, useState } from "react";
import "../../src/index.css";
import { HiOutlineCode } from "react-icons/hi";
import Sidebar from "./Sidebar";
import Logo from "../utils/resources/images/3.png";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
        // className="nav"
        className={`${visible ? "nav" : "nav navStyle"}`}
      >
        {/* Logo */}
        <div className="flex items-center lg:w-1/2">
          <a href="/">
            {/* <HiOutlineCode /> */}
            <img src={Logo} alt="" className="h-12" />
          </a>
          <p className="font-bitter text-sm text-teal-300">Matthew Fontoura</p>
        </div>

        {/* Links */}
        <div>
          <Sidebar visible={visible} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
