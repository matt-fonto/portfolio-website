import React from "react";
import BigProjects from "./BigProjects";
import { bigProjects, smallProjects } from "../utils/constants";
import SmallProjects from "./SmallProjects";

//netflix: https://netflix-clone-8da19.web.app/
//react cart: https://sage-dieffenbachia-472fb0.netlify.app/
//youtube: https://enchanting-sopapillas-14f13d.netlify.app/

const Portfolio = ({ animationType }) => {
  return (
    // Portfolio headers
    <div
      className="flex-col justify-center mx-auto items-center overflow-hidden"
      id="projects"
    >
      {/* Headline */}
      <div className="flex justify-evenly items-center">
        <h3 className="font-bitter tracking-wider text-3xl font-bold">
          <span className="mr-2 text-teal-300">01.</span>Projects
        </h3>
        <div className="w-[50vh] h-[0.5px] bg-gray-200 ml-4" />
      </div>

      {/* Subheadline */}
      <div className="mb-10" data-aos="fade-up">
        <h3 className="uppercase tracking-[5px] font-openSans text-gray-400 text-1xl font-medium text-center py-10">
          What I've been working on
        </h3>
      </div>

      {/* Big Projects */}
      <div className="flex flex-col">
        {bigProjects.map((project, index) => {
          return (
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
              <BigProjects {...project} key={project.id} index={index} />
            </div>
          );
        })}
      </div>

      <h2 className="text-center text-2xl mb-[5vh] font-bitter">
        Other Relevant Projects
      </h2>
      {/* Small Projects */}
      <div className="flex gap-6">
        {smallProjects.map((project, index) => {
          return <SmallProjects {...project} key={project.id} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
