import React, { useState } from "react";
import { languageSkills, librarySkills, toolsSkills } from "../utils/constants";

const Skills = () => {
  const [showName, setShowName] = useState(false);
  const [showProgramming, setShowProgramming] = useState(false);
  const [showFrameworks, setShowFrameworks] = useState(false);
  const [showTools, setShowTools] = useState(false);

  const onHover = (id) => {
    setShowName(id);
  };

  const onHoverOut = (id) => {
    setShowName(false);
  };

  return (
    <div className="flex flex-col mt-20" id="skills">
      {/* Header */}
      <div className="flex justify-evenly items-center">
        <div className="w-[50vh] h-[0.5px] bg-gray-200 ml-4" />
        <h3 className="font-bitter tracking-wider text-3xl font-bold">
          <span className="mr-2 text-teal-300">02.</span>Skills
        </h3>
      </div>

      {/* languages */}
      <div className="relative">
        <div className="mb-10 ">
          <div className="absolute w-[60px] h-[2px] bg-[#AB75EB] ml-4 -left-4 top-20 " />
          <h3 className="uppercase tracking-[5px] text-gray-400 text-1xl font-openSans font-medium text-left py-10">
            <span
              className={`${
                showProgramming && "font-bold text-[#AB75EB] duration-500"
              }`}
            >
              Programming
            </span>{" "}
            Languages
          </h3>
        </div>
        <div className="flex text-6xl gap-4 justify-evenly items-center h-[30vh]">
          {languageSkills.map((language) => {
            return (
              <div
                className="flex flex-col items-center"
                onMouseOver={() => setShowProgramming(true)}
                onMouseLeave={() => setShowProgramming(false)}
                data-aos="fade-up"
              >
                {/* <h2>{language.name}</h2> */}
                <span
                  className="hover:text-[#AB75EB] hover:-translate-y-1 duration-500"
                  onMouseOver={() => onHover(language.id)}
                  onMouseLeave={() => onHoverOut(language.id)}
                >
                  {language.icon}
                </span>
                {/* language name - Hover */}
                <div className="h-[60px] w-[40px] mx-auto flex justify-center">
                  {showName === language.id && (
                    <p className="text-sm text-gray-500 tracking-[2px] uppercase mt-4 text-center font-openSans">
                      {language.name}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Libraries & Frameworks */}
      <div className="relative">
        <div className="mb-10">
          <div className="absolute w-[60px] h-[2px] bg-[#EB7646] ml-4 -right-0 top-20 " />
          <h3 className="uppercase tracking-[5px] text-gray-400 text-1xl font-openSans font-medium text-right py-10">
            Libraries &{" "}
            <span
              className={`${
                showFrameworks && "font-bold text-[#EB7646] duration-500"
              }`}
            >
              Frameworks
            </span>
          </h3>
        </div>
        <div className="flex text-6xl gap-2 justify-between items-center h-[30vh]">
          {librarySkills.map((item) => {
            return (
              <div
                className="flex flex-col items-center"
                onMouseOver={() => setShowFrameworks(true)}
                onMouseLeave={() => setShowFrameworks(false)}
                data-aos="fade-up"
              >
                <span
                  className="hover:text-[#EB7646] hover:-translate-y-1 duration-500"
                  onMouseOver={() => onHover(item.id)}
                  onMouseLeave={() => onHoverOut(item.id)}
                >
                  {item.icon}
                </span>
                {/* Libraries&Frameworks name - Hover */}
                <div className="h-[60px] w-[40px] mx-auto flex justify-center">
                  {showName === item.id && (
                    <p className="text-sm text-gray-500 uppercase tracking-[2px] mt-4 font-openSans text-center">
                      {item.name}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ToolSkills */}
      <div className="relative">
        <div className="mb-10">
          <div className="absolute w-[60px] h-[2px] bg-[#EBE952] ml-4 -left-4 top-20 " />
          <h3 className="uppercase tracking-[5px] text-gray-400 text-1xl font-openSans font-medium text-left py-10">
            <span
              className={`${
                showTools && "font-bold text-[#EBE952] duration-500"
              }`}
            >
              Tools
            </span>{" "}
            & Platforms
          </h3>
        </div>
        <div className="flex text-6xl gap-2 justify-between items-center h-[30vh]">
          {toolsSkills.map((tool) => {
            return (
              <div
                className="flex flex-col items-center"
                onMouseOver={() => setShowTools(true)}
                onMouseLeave={() => setShowTools(false)}
                data-aos="fade-up"
              >
                <span
                  className="hover:text-[#EBE952] hover:-translate-y-1 duration-500"
                  onMouseOver={() => onHover(tool.id)}
                  onMouseLeave={() => onHoverOut(tool.id)}
                >
                  {tool.icon}
                </span>
                {/* Tools&Platforms name - Hover */}
                <div className="h-[60px] w-[40px] mx-auto flex justify-center">
                  {showName === tool.id && (
                    <p className="text-sm text-gray-500 uppercase tracking-[2px] mt-4 font-openSans text-center">
                      {tool.name}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
