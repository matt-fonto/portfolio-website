import React from "react";
import Skill from "./Skill";
import { skills } from "../utils/constants";

const Skills = () => {
  return (
    // headline
    <div className="mt-20 flex-col md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-neutral-400 text-2xl py-4 font-medium text-center">
        <span className="text-teal-400">Coding</span> Skills
      </h3>

      <h3 className="top-36 uppercase tracking-[5px] text-neutral-400 text-1xl py-10 font-medium text-center">
        Hover to know more
      </h3>
      {/* ... */}

      {/* skills container */}
      <div className="inline-grid sm:grid-cols-3 lg:grid-cols-5 w-[100%] place-items-center gap-4">
        {skills.map((skill) => {
          return <Skill {...skill} key={skill.id} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
