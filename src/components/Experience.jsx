import React from "react";
import pic from "../utils/resources/images/mypic.jpeg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ExperienceTabs from "./ExperienceTabs";

const Experience = () => {
  return (
    <div
      id="experience"
      className="mt-28 md:mt-0 h-[90vh] md:h-[50vh] lg:h-max flex items-center flex-col"
    >
      {/* Headline */}
      <div className="flex justify-evenly items-center">
        <h3 className="font-bitter tracking-wider text-3xl font-bold">
          <span className="mr-2 text-teal-300">03.</span>Experience
        </h3>
        <div className="w-[100px] md:w-[200px] lg:w-[50vh] h-[0.5px] bg-gray-200 ml-4" />
      </div>

      {/* Tabs */}
      <div
        data-aos="fade-up"
        className="flex items-start md:items-center h-full"
      >
        <ExperienceTabs />
      </div>
    </div>
  );
};

export default Experience;
