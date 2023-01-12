import React, { useState } from "react";
import { BiRightArrow } from "react-icons/bi";

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="h-[70vh] lg:h-[500px] flex items-center lg:mx-[50px] console.log();:mx-20">
      {/*  */}
      <div className="flex">
        {/* Left Menu - Buttons */}
        <div className="flex-col w-1/5 rounded-md h-max relative">
          {/* Line Decoration Buttons */}
          <div className="absolute bg-gray-300 h-full w-1 top-0" />

          {/* Button Tab One */}
          <button
            className={`w-full text-left pl-4 py-2 px-4 rounded hover:text-teal-300 duration-500 relative  ${
              activeTab === "tab1" ? "text-teal-300" : "text-gray-300"
            }`}
            onClick={(event) => handleTabClick(event, "tab1")}
          >
            CEO Founder
            <span
              className={`${
                activeTab === "tab1" ? "block" : "hidden"
              } absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-teal-300`}
            ></span>
          </button>

          {/* Buton Tab Two */}
          <button
            className={`w-full text-left pl-4 py-2 px-4 rounded hover:text-teal-300 duration-500 relative  ${
              activeTab === "tab2" ? "text-teal-300" : "text-gray-300"
            }`}
            onClick={(event) => handleTabClick(event, "tab2")}
          >
            Pedagogical Coordinator
            <span
              className={`${
                activeTab === "tab2" ? "block" : "hidden"
              } absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-teal-300`}
            ></span>
          </button>

          {/* Buton Tab Three*/}
          <button
            className={`w-full text-left pl-4 py-2 px-4 rounded hover:text-teal-300 duration-500 relative  ${
              activeTab === "tab3" ? "text-teal-300" : "text-gray-300"
            }`}
            onClick={(event) => handleTabClick(event, "tab3")}
          >
            English Teacher
            <span
              className={`${
                activeTab === "tab3" ? "block" : "hidden"
              } absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-teal-300`}
            ></span>
          </button>

          {/* Buton Tab Four*/}
          <button
            className={`w-full text-left pl-4 py-2 px-4 rounded hover:text-teal-300 duration-500 relative  ${
              activeTab === "tab4" ? "text-teal-300" : "text-gray-300"
            }`}
            onClick={(event) => handleTabClick(event, "tab4")}
          >
            Interpreter
            <span
              className={`${
                activeTab === "tab4" ? "block" : "hidden"
              } absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-teal-300`}
            ></span>
          </button>
        </div>

        {/* Right Menu - Experience */}
        <div className="flex-col w-4/5 h-[40vh]">
          {/* Experience 1 */}
          <div
            className={`${
              activeTab === "tab1" ? "block" : "hidden"
            } py-4 px-4 rounded-b-md`}
          >
            <div className="flex">
              <h2 className="text-2xl font-bitter text-teal-300 font-bold">
                CEO Founder
              </h2>
              <span className="text-2xl font-bitter pl-2 text-gray-300">
                @ Speak Now
              </span>
            </div>

            <h2 className="text-gray-300 py-4 font-bitter">
              Aug. 2022 - Present
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Developed and implemented an online English academy with
                  personalized learning plans and successful revenue growth of
                  68% in 2022
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Cultivated a client base of over 100 students, including
                  businesses, across Brazil and Europe
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Created and managed the academy's methodology, strategic
                  planning, pedagogy, administration, and marketing processes
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Led a team of teachers in Brazil, designing weekly activities
                  and making business decisions
                </p>
              </li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div
            className={`${
              activeTab === "tab2" ? "block" : "hidden"
            } py-4 px-4 rounded-b-md`}
          >
            <div className="flex">
              <h2 className="text-2xl font-bitter text-teal-300 font-bold">
                Pedagogical Coordinator
              </h2>
              <span className="text-2xl font-bitter pl-2 text-gray-300">
                @ British & American
              </span>
            </div>

            <h2 className="text-gray-300 py-4 font-bitter">
              Feb. 2018 - Jul. 2020
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Designed and implemented a successful pedagogical approach for
                  a regional unit of the school, which was later adopted by
                  other units
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Led initiatives to improve teaching techniques and learning
                  environments, including classroom structure and the use of
                  various stimuli
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Taught a range of English proficiency levels (A1 to C1) to
                  students of all ages, demonstrating adaptability and strong
                  communication skills
                </p>
              </li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div
            className={`${
              activeTab === "tab3" ? "block" : "hidden"
            } py-4 px-4 rounded-b-md`}
          >
            <div className="flex">
              <h2 className="text-2xl font-bitter text-teal-300 font-bold">
                English Teacher
              </h2>
            </div>
            {/* Schools */}
            <div className="mt-4 relative flex justify-evenly">
              <div>
                <span className="text-2xl font-bitter pl-2 text-gray-300">
                  @ Language in Life
                </span>
                <h2 className="text-gray-300 py-2 font-bitter">
                  Apr. 2017 - Feb. 2018
                </h2>
              </div>
              <div>
                <span className="text-2xl font-bitter pl-2 text-gray-300">
                  @ TopWay
                </span>
                <h2 className="text-gray-300 py-2 font-bitter">
                  Sep. 2015 - Dec. 2016
                </h2>
              </div>
            </div>

            <ul className="flex flex-col gap-y-4">
              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Taught classes to students of all ages, adapting teaching
                  methods and materials to engage and motivate a diverse student
                  body
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Demonstrated strong communication skills and the ability to
                  create dynamic and effective learning experiences
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Taught classes explaining complex concepts clearly and
                  effectively, with a focus on clear and concise communication
                  for English learners
                </p>
              </li>
            </ul>
          </div>

          {/* Experience 4 */}
          <div
            className={`${
              activeTab === "tab4" ? "block" : "hidden"
            } py-4 px-4 rounded-b-md`}
          >
            <div className="flex">
              <h2 className="text-2xl font-bitter text-teal-300 font-bold">
                Interpreter
              </h2>
              <span className="text-2xl font-bitter pl-2 text-gray-300">
                @ Sanovo
              </span>
            </div>

            <h2 className="text-gray-300 py-4 font-bitter">
              Sep. 2015 - Dec. 2016
            </h2>

            <ul className="flex flex-col gap-y-4">
              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs w-4" />
                <p className="ml-2 font-openSans text-gray-400">
                  Acted as a language translator for a team of engineers
                  building an industrial recycling oven, facilitating
                  communication between non-native Portuguese speakers and the
                  Brazilian team
                </p>
              </li>

              <li className="flex">
                <BiRightArrow className="mt-1 text-teal-300 text-xs" />
                <p className="ml-2 font-openSans text-gray-400">
                  Demonstrated strong language skills and the ability to
                  effectively convey technical instructions in a fast-paced,
                  high-stakes environment
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabs;
