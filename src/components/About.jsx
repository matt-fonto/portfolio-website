import React from "react";
import { BiRightArrow } from "react-icons/bi";
import MyPic from "../utils/resources/images/mypic.jpeg";

const About = () => {
  return (
    <div className="flex flex-col gap-y-4" id="about">
      {/* // Header */}
      <div className="flex justify-evenly items-center">
        <div className="w-[200px] lg:w-[50vh] h-[0.5px] bg-gray-200 ml-4" />
        <h3 className="font-bitter tracking-wider text-3xl font-bold">
          <span className="mr-2 text-teal-300">04.</span>About Me
        </h3>
      </div>

      {/* Container Content + Picture */}
      <div className="flex-col lg:flex-row flex h-max items-center md:items-start">
        {/* content */}
        <div
          className="flex flex-col gap-y-4 w-full lg:w-1/2"
          data-aos="fade-up"
        >
          {/* text */}
          <p className="text-md font-openSans text-gray-400">
            Hey, there!
            <br />
            <br />
            I'm an educator turning software engineer, currently doing a
            computer science degree. With my strong discipline, determination,
            and attention to detail, I bring a unique perspective and efficient
            work ethic to the table.
            <br />
            <br />
            I'm a fast learner and thrive in collaborative environments. I'm
            also highly organized, resourceful, and competent in my work. I have
            built my own business from the ground up, where I managed a team and
            developed strategical, marketing, and administrative processes.
            <br />
            <br />
            Most importantly, I'm passionate about what I do and am driven to
            succeed. Together, we can accomplish anything! Let's create
            something great.
            <br />
            <br />
            Here are a few technologies and concepts that I've been studying
            recently:
          </p>
          <div>
            {/* tech */}
            <div className="flex my-4">
              {/* Column 1 */}
              <ul className="lg:w-1/2">
                <li className="flex items-center gap-2">
                  <BiRightArrow className="text-xs text-teal-300" />
                  <p className="text-gray-400 font-bitter">
                    Data Structures and Algorithms
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <BiRightArrow className="text-xs text-teal-300" />
                  <p className="text-gray-400 font-bitter">GraphQL</p>
                </li>
                <li className="flex items-center gap-2">
                  <BiRightArrow className="text-xs text-teal-300" />
                  <p className="text-gray-400 font-bitter">NestJS</p>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="lg:w-1/2">
                <li className="flex items-center gap-2">
                  <BiRightArrow className="text-xs text-teal-300" />
                  <p className="text-gray-400 font-bitter">REST APIs</p>
                </li>
                <li className="flex items-center gap-2">
                  <BiRightArrow className="text-xs text-teal-300" />
                  <p className="text-gray-400 font-bitter">SQL</p>
                </li>
                <li className="flex items-center gap-2">
                  <BiRightArrow className="text-xs text-teal-300" />
                  <p className="text-gray-400 font-bitter">Sanity</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* picture */}
        <div className="flex justify-center h-[350px] items-center w-full lg:w-1/2">
          <div className="image-with-background relative">
            <a href="https://github.com/softEngMatthew" target="_blank">
              <img
                src={MyPic}
                alt=""
                className="rounded-lg h-[250px] grayscale-[40%] hover:grayscale-0 duration-500 object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
