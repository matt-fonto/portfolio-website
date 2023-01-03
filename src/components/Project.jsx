import React, { useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { RxExternalLink } from "react-icons/rx";

const Project = (props) => {
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
  console.log(Array.isArray(techUsed));

  return (
    // container
    <div
      className={`flex relative h-[60vh] ${
        isEven ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* image */}
      <a href={projectLink} className="h-[70%] w-[70%]" target="_blank">
        <img
          src={image}
          alt={title}
          className="object-cover rounded opacity-70 hover:opacity-100 duration-500"
        />
      </a>

      {/* header container */}
      <div className={`mx-auto ${isEven ? "text-left" : "text-right"}`}>
        <h3 className="font-bitter text-md text-teal-300">Project</h3>
        {/* project title */}
        <h2 className="uppercase tracking-wider text-gray-300 text-xl">
          {title}
        </h2>
      </div>
      {/* description container */}

      <div
        className={`absolute h-auto bg-gray-800 rounded w-[50vh] p-4 px-7 top-[20%] ${
          isEven ? "left-0" : "right-0"
        } `}
      >
        {/* description */}
        <p>{description}</p>
      </div>

      {/* bottom part - Technology used and links */}
      <div className={`absolute bottom-[20%] ${isEven ? "left-5" : "right-5"}`}>
        <div className="inline">
          {/* {techUsed.map((tech) => {
            return <p>{tech}</p>;
          })} */}
          <p className="uppercase">
            {/* {techUsed?.map((tech) => console.log(tech))} */}
          </p>
        </div>
        {/* icons */}
        <div className="flex text-2xl mt-4">
          <AiOutlineGithub />
          <RxExternalLink />
        </div>
      </div>
    </div>
  );
};

export default Project;
