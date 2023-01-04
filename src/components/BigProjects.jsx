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
    <div className="flex flex-col scroll-smooth">
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
        <a href={projectLink} className="h-[70%] w-[70%]" target="_blank">
          <img
            src={image}
            alt={title}
            className="object-cover rounded opacity-50 hover:opacity-100 hover:-translate-y-2 duration-500"
          />
        </a>

        {/* description container */}
        <div
          className={`absolute h-auto bg-gray-800 rounded w-[55vh] p-4 px-7 top-[5vh] ${
            isEven ? "left-0" : "right-0"
          } `}
        >
          {/* description */}
          <p className={`${isEven ? "text-left" : "text-right"} py-2`}>
            {description}
          </p>
        </div>

        {/* bottom part - Technology used and links */}
        <div
          className={`absolute bottom-[10vh] ${isEven ? "left-0" : "right-0"}`}
        >
          <div className="flex">
            {techUsed.map((item) => {
              return (
                <p className="font-bitter uppercase text-teal-300 px-1">
                  {item}
                </p>
              );
            })}
          </div>
          {/* <p className="uppercase font-bitter">{techUsed?.map(tech)=}</p> */}

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
