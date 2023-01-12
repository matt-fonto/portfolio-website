import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";
import { smallProjects } from "../utils/constants";

const SmallProjects = ({
  description,
  gitHubLink,
  title,
  techUsed,
  projectLink,
}) => {
  return (
    //   {/*container folders */}
    <div
      className="w-[70%] lg:h-[300px] lg:w-[700px] bg-[#2a2929] rounded shadow-md p-5 duration-500 relative"
      data-aos="fade-up"
    >
      {/* upper container - links */}
      <div className="flex justify-between items-center mb-4">
        {projectLink ? (
          <a href={projectLink} target="_blank">
            <AiOutlineFolderOpen className="text-3xl text-teal-300 hover:-translate-y-1 duration-500" />
          </a>
        ) : (
          <a href={gitHubLink} target="_blank">
            <AiOutlineFolderOpen className="text-3xl text-teal-300 hover:-translate-y-1 duration-500" />
          </a>
        )}

        <div className="flex justify-between text-2xl gap-2">
          <a href={gitHubLink} target="_blank">
            <AiOutlineGithub className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
          </a>
          {projectLink && (
            <a href={projectLink} target="_blank">
              <RxExternalLink className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
            </a>
          )}
        </div>
      </div>

      {/* description container */}
      <div>
        <h2 className="font-bitter text-gray-300 font-bold text-xl mb-2">
          {title}
        </h2>
        <p className="font-openSans text-gray-400 font-md mb-4 ">
          {description}
        </p>
      </div>

      {/* techused */}
      <div className="lg:absolute bottom-4 flex mx-auto justify-evenly flex-wrap gap-1">
        {techUsed.map((item) => {
          return (
            <div className="">
              <p className="text-[#222] bg-gray-400 lowercase font-bitter rounded h-6 w-max p-2 text-sm flex items-center">
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SmallProjects;
