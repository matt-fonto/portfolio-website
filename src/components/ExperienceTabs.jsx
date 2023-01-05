import React, { useState } from "react";

const ExperienceTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (event, tab) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="flex mt-10 h-screen">
      {/* Left Menu - Buttons */}
      <div className="flex-col w-1/4">
        {/* Button Tab One */}
        <button
          className={`w-full text-center py-2 px-4 rounded hover:text-teal-300 hover:bg-teal-900 ${
            activeTab === "tab1" ? "bg-[#111] text-teal-300" : "text-gray-300"
          }`}
          onClick={(event) => handleTabClick(event, "tab1")}
        >
          CEO Founder
          <span
            className={`${
              activeTab === "tab1" ? "block" : "hidden"
            } h-2 w-2 rounded-full bg-gray-600 mt-1 ml-1 absolute`}
          ></span>
        </button>

        {/* Buton Tab Two */}
        <button
          className={`w-full text-center py-2 px-4 ${
            activeTab === "tab2"
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={(event) => handleTabClick(event, "tab2")}
        >
          Tab 2
          <span
            className={`${
              activeTab === "tab2" ? "block" : "hidden"
            } h-2 w-2 rounded-full bg-gray-600 mt-1 ml-1 absolute`}
          ></span>
        </button>

        {/* Buton Tab Three*/}
        <button
          className={`w-full text-center py-2 px-4 ${
            activeTab === "tab3"
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={(event) => handleTabClick(event, "tab3")}
        >
          Tab 3
          <span
            className={`${
              activeTab === "tab3" ? "block" : "hidden"
            } h-2 w-2 rounded-full bg-gray-600 mt-1 ml-1 absolute`}
          ></span>
        </button>

        {/* Buton Tab Four*/}
        <button
          className={`w-full text-center py-2 px-4 ${
            activeTab === "tab4"
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={(event) => handleTabClick(event, "tab4")}
        >
          Tab 4
          <span
            className={`${
              activeTab === "tab4" ? "block" : "hidden"
            } h-2 w-2 rounded-full bg-gray-600 mt-1 ml-1 absolute`}
          ></span>
        </button>

        {/* Buton Tab Five*/}
        <button
          className={`w-full text-center py-2 px-4 ${
            activeTab === "tab5"
              ? "bg-gray-800 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
          onClick={(event) => handleTabClick(event, "tab5")}
        >
          Tab 5
          <span
            className={`${
              activeTab === "tab5" ? "block" : "hidden"
            } h-2 w-2 rounded-full bg-gray-600 mt-1 ml-1 absolute`}
          ></span>
        </button>
      </div>

      {/* Right Menu - Experience */}
      <div className="flex-col w-3/4">
        {/* Experience 1 */}
        <div
          className={`${
            activeTab === "tab1" ? "block" : "hidden"
          } py-4 px-4 bg-gray-200 rounded-b-md`}
        >
          Tab 1 content
        </div>

        {/* Experience 2 */}
        <div
          className={`${
            activeTab === "tab2" ? "block" : "hidden"
          } py-4 px-4 bg-gray-200 rounded-b-md`}
        >
          Tab 2 content
        </div>

        {/* Experience 3 */}
        <div
          className={`${
            activeTab === "tab3" ? "block" : "hidden"
          } py-4 px-4 bg-gray-200 rounded-b-md`}
        >
          Tab 3 content
        </div>

        {/* Experience 4 */}
        <div
          className={`${
            activeTab === "tab4" ? "block" : "hidden"
          } py-4 px-4 bg-gray-200 rounded-b-md`}
        >
          Tab 4 content
        </div>

        {/* Experience 5 */}
        <div
          className={`${
            activeTab === "tab5" ? "block" : "hidden"
          } py-4 px-4 bg-gray-200 rounded-b-md`}
        >
          Tab 4 content
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabs;
