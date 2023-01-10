import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const FixedMenus = ({ sendEmail }) => {
  return (
    <div className="border-r border-gray-300 h-[300px] w-[150px] fixed top-[30vh] flex flex-col justify-center items-center gap-y-8">
      {/* left */}
      <div className="flex flex-col justify-evenly items-center h-full">
        <a href="https://github.com/softEngMatthew" target="_blank">
          <FiGithub className="text-gray-300 text-2xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/mateus-fontoura-701433213/"
          target="_blank"
        >
          <SlSocialLinkedin className="text-gray-300 text-2xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </a>

        <button onClick={sendEmail}>
          <HiOutlineMail className="text-gray-300 text-3xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </button>

        <a href="https://www.instagram.com/_fontoura/">
          <BsInstagram className="text-gray-300 text-2xl hover:text-teal-400 hover:-translate-y-1 duration-500" />
        </a>

        {/* <div className="w-[1px] h-[150px] bg-gray-200" /> */}
      </div>
    </div>
  );
};

export default FixedMenus;

// Version 1
// {
//   <div className="fixed min-h-screen w-full">
//       {/* left */}
//       <div className="absolute left-10 bottom-1 flex justify-center">
//         {/* line */}
//         <div className="w-[1px] h-[20vh] bg-gray-200" />
//         {/* Icons */}
//         <div className="flex flex-col text-2xl absolute bottom-[22vh]">
//           <FiGithub className="hover:text-teal-400 hover:-translate-y-1 duration-500" />
//           <SlSocialLinkedin className="mt-5 hover:text-teal-400 hover:-translate-y-1 duration-500" />
//         </div>
//       </div>
//       {/* right */}
//       <div className="absolute right-10 bottom-1 flex justify-center">
//         <div className="w-[1px] h-[20vh] bg-gray-200" />
//         {/* text */}
//         <div className="absolute bottom-[30vh]">
//           <a href="mateus.fonto@gmail.com">
//             <p className="font-bitter text-sm hover:-translate-y-1 duration-500 hover:text-teal-400 rotate-90">
//               mateus.fonto@gmail.com
//             </p>
//           </a>
//         </div>
//       </div>
//     </div>
// }
