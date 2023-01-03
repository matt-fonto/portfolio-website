import React from "react";
import pic from "../utils/resources/images/mypic.jpeg";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Experience = () => {
  return (
    <div className="mx-10 mt-10">
      <h3 className="uppercase tracking-[20px] text-neutral-400 text-2xl py-4 font-medium text-center">
        <span className="text-teal-400">Life</span> XP
      </h3>

      {/* image and about */}
      <div className="flex justify-center mt-5">
        {/* right */}
        <div className="w-[100%]">
          <img
            src={pic}
            alt="picture"
            className="rounded-full w-80 h-80 object-cover mx-auto"
          />
        </div>
        {/* left */}
        <div className="">
          <p className="mx-auto">
            I am a lifelong learner who has founded his own English academy and
            managed his own team, yet decided to pursue a life-long passion for
            computer science, software development, and coding. I’m a highly
            driven and focused individual, who seeks to help people and society,
            be it through education, be it through technological solutions.
          </p>
          {/* other skills */}
          <div className="flex gap-5 mt-5">
            {/* professional skills */}
            <div className="h-[max] border rounded my-4 border-neutral-500 w-[50%] p-4 hover:shadow-sm">
              <h2 className="uppercase tracking-[4px] text-neutral-400 text-md py-4 text-center">
                Professional Skills
              </h2>

              <ul>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Teaching
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Team Management
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Knowledge Engineering
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Academic Writing
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Web Copyright
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Blog Writing
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Content Production
                </li>
              </ul>
            </div>
            {/* soft skills */}
            <div className="h-[max] border rounded my-4 border-neutral-500 w-[50%] p-4 hover:shadow-sm">
              <h2 className="uppercase tracking-[4px] text-neutral-400 text-md py-4 text-center">
                Soft Skills
              </h2>

              <ul>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Excellent verbal and written communication
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Highly effective in time management
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Adaptable
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Great listening skills
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Problem-solver
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Communicative
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Highly focused
                </li>
                <li className="flex items-center gap-1">
                  <IoIosArrowDroprightCircle />
                  Autonomous
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
