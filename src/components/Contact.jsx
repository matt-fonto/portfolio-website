import React from "react";

const Contact = ({ sendEmail }) => {
  return (
    <div
      className="flex flex-col justify-center items-center h-[80vh] gap-y-[40px]"
      id="contact"
    >
      {/* // Header */}
      <div className="flex justify-evenly items-center">
        <h3 className="font-bitter tracking-wider text-3xl font-bold">
          <span className="mr-2 text-teal-300">05.</span>What's Next?
        </h3>
        <div className="w-[50vh] h-[0.5px] bg-gray-200 ml-4" />
      </div>

      <h2 className="text-4xl font-bitter text-teal-300 font-bold">
        Get in Touch
      </h2>
      <div data-aos="fade-up">
        <p className="font-openSans text-gray-400 text-center mx-[200px]">
          Let's make a winning team. Contact me now to learn more about my
          experience and how I can contribute to your company's success.
        </p>
      </div>

      <div data-aos="fade-up">
        <button
          className="border rounded border-teal-400 h-[7vh] w-[20vh] font-bold font-bitter hover:scale-105 duration-500"
          onClick={sendEmail}
        >
          Say Hello
        </button>
      </div>
    </div>
  );
};

export default Contact;
