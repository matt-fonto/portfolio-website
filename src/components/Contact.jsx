import React from "react";

const Contact = ({ sendEmail }) => {
  return (
    <div
      className="h-[500px] w-full flex flex-col justify-start lg:justify-center items-center lg:h-[80vh] gap-y-[40px]"
      id="contact"
    >
      {/* // Header */}
      <div className="flex justify-evenly items-center">
        <h3 className="font-bitter tracking-wider text-3xl font-bold">
          <span className="mr-2 text-teal-300">05.</span>What's Next?
        </h3>
        <div className="w-[200px] lg:w-[50vh] h-[0.5px] bg-gray-200 ml-4" />{" "}
      </div>

      <h2 className="text-4xl font-bitter text-teal-300 font-bold">
        Get in Touch
      </h2>
      <div data-aos="fade-up">
        <p className="mx-4 font-openSans text-gray-400 text-center lg:mx-[200px]">
          Let's make a winning team. Contact me now to learn more about my
          experience and how I can contribute to your company's success.
        </p>
      </div>

      <div data-aos="fade-up" className="h-[]">
        <button
          className="w-[200px] text-1xl h-[50px] border rounded border-teal-400 lg:h-[7vh] lg:w-[20vh] font-bold font-bitter hover:scale-105 duration-500"
          onClick={sendEmail}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default Contact;

// h-[40px] w-[80px]
