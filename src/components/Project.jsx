import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const Project = ({ title, icon, description, projectLink, gitHubLink }) => {
  return (
    <div className="h-[max] border rounded my-4 border-neutral-500 w-[340px] hover:shadow-sm hover:shadow-teal-500 duration-500">
      <div className="flex h-[100%]">
        <span className="m-auto text-[50px] my-5 pt-2 justify-center h-max">
          <a
            className="hover:text-teal-400 duration-500"
            href={projectLink ? projectLink : gitHubLink}
            target="_blank"
          >
            {icon}
          </a>
        </span>
      </div>
      {/* text container */}
      <div className="h-[200px]">
        <h2 className="tracking-[2px] text-neutral-400 text-1xl py-4 font-medium text-center uppercase">
          {title}
        </h2>
        <p className="text-neutral-400 text-md p-2 mx-5">{description}</p>
      </div>

      {/* buttons - Go to project + GitHub link */}
      <div className="flex justify-center gap-5 mb-5">
        <a href={gitHubLink} target="_blank">
          <AiOutlineGithub className="text-4xl hover:text-teal-400 duration-500" />
        </a>
        <div>
          {projectLink && (
            <a href={projectLink} target="_blank">
              <button className="border rounded border-teal-500 p-2 font-bold hover:bg-teal-900 duration-700">
                Access Project
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
