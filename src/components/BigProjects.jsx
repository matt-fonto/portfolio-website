import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const BigProjects = (props) => {
  const {
    title,
    icon,
    image,
    description,
    projectLink,
    gitHubLink,
    techUsed,
    index,
  } = props;

  const isEven = index % 2 !== 0;

  return (
    // section container
    <div className="flex flex-col scroll-smooth h-[70vh]">
      {/* header container */}
      <div className={`${isEven ? "text-left" : "text-right"}`}>
        <h3 className="font-bitter text-md text-teal-300">Project</h3>
        {/* project title */}
        <h2 className="uppercase tracking-wider text-gray-300 text-xl">
          {title}
        </h2>
      </div>

      {/* image + description container*/}
      <div
        className={`flex relative h-[50vh] ${
          isEven ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* image */}
        <a href={projectLink} target="_blank">
          <img
            src={image}
            alt={title}
            className="h-[50vh] w-full object-cover rounded opacity-50 hover:opacity-100 hover:-translate-y-2 duration-500"
          />
        </a>

        {/* description container */}
        <div
          className={`absolute h-max bg-[#2a2929] rounded w-[70vh] p-4 px-7 top-2 ${
            isEven ? "left-0" : "right-0"
          } `}
        >
          {/* description */}
          <p className={`${isEven ? "text-left" : "text-right"} py-2`}>
            {description}
          </p>
        </div>

        {/* bottom part - Technology used and links */}
        <div className={`absolute bottom-16 ${isEven ? "left-0" : "right-0"}`}>
          <div className="flex gap-x-2">
            {techUsed.map((item) => {
              return (
                <p className="text-[#222] bg-gray-400 lowercase font-bitter rounded h-6 w-max p-2 text-sm flex items-center">
                  {item}
                </p>
              );
            })}
          </div>

          {/* icons */}
          <div
            className={`flex text-3xl gap-4 mt-4 ${
              isEven ? "justify-start" : "justify-end"
            }`}
          >
            <a href={gitHubLink} target="_blank">
              <AiOutlineGithub className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
            </a>
            <a href={projectLink} target="_blank">
              <RxExternalLink className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigProjects;
