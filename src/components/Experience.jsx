import React from "react";

const Experience = () => {
  return (
    <div>
      <h3 className="uppercase tracking-[20px] text-neutral-400 text-2xl py-4 font-medium text-center">
        <span className="text-teal-400">Life</span> XP
      </h3>

      {/* image and about */}
      <div>
        {/* right */}
        <div>
          <img src="../../public/mypic.jpeg" alt="" />
        </div>
        {/* left */}
        <div>
          <p>
            I am a lifelong learner who has founded his own English academy and
            managed his own team, yet decided to pursue a life-long passion for
            computer science, software development, and coding. I’m a highly
            driven and focused individual, who seeks to help people and society,
            be it through education, be it through technological solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
