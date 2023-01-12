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
    <div className="flex flex-col lg:h-[70vh]">
      {/* header container */}
      <div className={`${isEven ? "text-left" : "text-right"}`}>
        <h3 className="font-bitter text-md text-teal-300">Project</h3>
        {/* project title */}
        <h2 className="uppercase tracking-wider text-gray-300 text-xl">
          {title}
        </h2>
      </div>

      {/* image + description container + tech used*/}
      <div
        className={`mb-16 lg:mb-0 lg:flex relative lg:h-[50vh] ${
          isEven ? "flex-row-reverse" : "flex-row"
        }`}
      >
        {/* image */}
        <a href={projectLink} target="_blank">
          <img
            src={image}
            alt={title}
            className="lg:h-[50vh] w-full object-contain rounded-lg border border-gray-600 shadow-md shadow-black opacity-50 hover:opacity-100 hover:-translate-y-2 duration-500"
          />
        </a>

        {/* description container */}
        <div
          className={`md:absolute sm:p-4 bg-[#2a2929] rounded w-full md:w-[50%] h-max p-4 px-7 top-2 ${
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
          className={`block mt-4 md:flex lg:block items-center justify-evenly lg:absolute bottom-16 ${
            isEven ? "left-0" : "right-0"
          }`}
        >
          <div className="flex flex-wrap gap-2">
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
            className={`mt-8 flex items-center text-3xl gap-4 md:mt-4 ${
              isEven
                ? "justify-center md:justify-start"
                : "justify-center md:justify-end"
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
