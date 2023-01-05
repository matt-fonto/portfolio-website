import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const SmallProjects = ({ description, gitHubLink, title, techUsed }) => {
  return (
    //   {/*container folders */}
    <div className="h-[30vh] w-full bg-[#111] rounded p-5 cursor-pointer hover:-translate-y-2 duration-500 relative">
      {/* upper container - links */}
      <div className="flex justify-between items-center mb-4">
        <AiOutlineFolderOpen className="text-3xl text-teal-300" />
        <div className="flex justify-between text-2xl gap-2">
          <AiOutlineGithub className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
          <RxExternalLink className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </div>
      </div>

      {/* description container */}
      <div>
        <h2 className="font-bitter text-gray-200 font-bold text-xl mb-2">
          {title}
        </h2>
        <p className="font-openSans text-gray-400 font-md">{description}</p>
      </div>

      {/* techused */}
      <div className="absolute flex gap-2 bottom-4">
        {techUsed.map((item) => {
          return (
            <p className="text-gray-500 uppercase font-bitter bg-[#222] rounded-md h-6 w-max px-1">
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default SmallProjects;
