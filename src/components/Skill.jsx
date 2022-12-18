import React from "react";
import { useState } from "react";

const Skill = ({ id, title, icon, skillLevel }) => {
  const [showSkillLevel, setShowSkillLevel] = useState(false);

  return (
    <div className="inline my-4 relative h-[85px]">
      <span
        className="text-[50px] flex justify-center hover:text-teal-400 duration-500"
        onMouseEnter={() => setShowSkillLevel(true)}
        onMouseLeave={() => setShowSkillLevel(false)}
      >
        {icon}
      </span>
      <h2 className="uppercase tracking-[2px] text-neutral-400 text-center pt-2">
        {title}
      </h2>

      <div>
        {showSkillLevel && (
          <span className="flex justify-center mt-2 text-teal-400">
            {skillLevel}
          </span>
        )}
      </div>
    </div>
  );
};

export default Skill;
