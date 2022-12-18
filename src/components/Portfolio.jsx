import React from "react";
import Project from "./Project";
import { projects } from "../utils/constants";

//netflix: https://netflix-clone-8da19.web.app/
//react cart: https://sage-dieffenbachia-472fb0.netlify.app/
//youtube: https://enchanting-sopapillas-14f13d.netlify.app/

const Portfolio = () => {
  return (
    <div className="mt-10 flex-col md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-neutral-400 text-2xl font-medium text-center">
        Portfolio
      </h3>

      <div className="mb-10">
        <h3 className="uppercase tracking-[5px] text-neutral-400 text-1xl font-medium text-center py-10">
          What I've been working on
        </h3>
      </div>

      {/* Projects */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
        {projects.map((project) => {
          return <Project {...project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
