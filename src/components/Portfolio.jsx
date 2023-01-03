import React from "react";
import Project from "./Project";
import { bigProjects } from "../utils/constants";

//netflix: https://netflix-clone-8da19.web.app/
//react cart: https://sage-dieffenbachia-472fb0.netlify.app/
//youtube: https://enchanting-sopapillas-14f13d.netlify.app/

const Portfolio = () => {
  return (
    // Portfolio headers
    <div className="flex-col justify-center mx-auto items-center w-[70%]">
      <div className="flex justify-evenly items-center">
        <h3 className="font-bitter tracking-wider text-3xl font-bold">
          <span className="mr-2 text-teal-300">01.</span>Projects
        </h3>
        <div className="w-[50vh] h-[0.5px] bg-gray-200 ml-4" />
      </div>

      <div className="mb-10">
        <h3 className="uppercase tracking-[5px] text-gray-400 text-1xl font-medium text-center py-10">
          What I've been working on
        </h3>
      </div>

      {/* Big Projects */}
      <div className="flex flex-col">
        {bigProjects.map((project, index) => {
          return <Project {...project} key={project.id} index={index} />;
        })}
      </div>

      {/* Smaller projects */}
    </div>
  );
};

export default Portfolio;
