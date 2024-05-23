import React from "react";
import car from "../assets/detailing.mp4";
import game from "../assets/minigame.mp4";

const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
          <p className="py-6"><em>Feel free to check out my GitHub as well</em> </p>
        </div>

        <div className="space-y-8">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <video className="absolute w-full h-full object-cover rounded-md" src={car} autoPlay loop muted />
            <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
              <span className="text-2xl font-bold text-white tracking-wider">
                Detailing Website Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Eyadinho/Projects/tree/main/FinalProject" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>

          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            <video className="absolute w-full h-full object-cover rounded-md" src={game} autoPlay loop muted />
            <div className="opacity-0 group-hover:opacity-100 absolute w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
              <span className="text-2xl font-bold text-white tracking-wider">
                Mini Game Project
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Eyadinho/Projects/tree/main/canvasgame" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
