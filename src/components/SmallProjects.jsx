import React from "react";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const SmallProjects = ({ description, gitHubLink, title }) => {
  return (
    //   {/*container folders */}
    <div className="h-[30vh] w-full bg-[#111] rounded p-5 cursor-pointer">
      {/* upper container - links */}
      <div className="flex justify-between items-center mb-4">
        <AiOutlineFolderOpen className="text-3xl text-teal-300" />
        <div className="flex justify-between text-2xl gap-2">
          <AiOutlineGithub className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
          <RxExternalLink />
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
      <div></div>
    </div>
  );
};

export default SmallProjects;
