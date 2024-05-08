import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          {" "}
          Eyad Kathir{" "}
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Cyber Security and Computer Science graduate student{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I love computers and software, I believe that they will be the first
          thing everybody uses and needs in the future, we will live in a time
          where nobody will know what is a pen and paper. with the growth of
          this technology, smart people out there are going to take advantage of
          this but not in a good way, and that's my job to outsmart these people
          and don't let them hack and steal your devices and information.
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
