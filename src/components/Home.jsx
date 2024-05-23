import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">
          {" "}
          Hello!! Thank you for checking out my portofolio 😁 my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {" "}
          Eyad Kathir{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Computer Science and Cyber Security graduate student 🎓{" "}
        </h2>
        <h6 className="text-2xl sm:text-3xl font-bold text-[#8892b0]">
          <em>I am currently doing my master's in Computer Science.</em>{" "}
        </h6>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          <em>Feel Free to look around 😎</em>
        </p>
        <div>
          <button className="text-white group  border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
