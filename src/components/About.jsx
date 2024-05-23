import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              
            </p>
          </div>
          <div>
            <p>
            My passion for computers and software drives my belief that these technologies will become indispensable in the future. 
        As we advance, digital solutions will integrate into every aspect of our lives, transforming how we work, communicate, and solve problems. 
        I envision a world where traditional tools like pen and paper become obsolete, replaced by innovative technologies that enhance our capabilities and connect us in ways we never imagined.
         My goal is to be at the forefront of this digital revolution, contributing to the development and implementation of software that shapes the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
