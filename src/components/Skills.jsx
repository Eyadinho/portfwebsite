import React from "../assets/react.png";
import AWS from "../assets/aws.png";
import CSS from "../assets/css.png";
import Github from "../assets/github.png";
import HTML from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import neo4j from "../assets/neo4j.png";
import oracle from "../assets/oracle.png";
import postman from "../assets/postman.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import sql from "../assets/sql.png";
import linux from "../assets/linux.png";
import INFA from "../assets/INFA.png";
import stone from "../assets/stone.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">Some of the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={React} alt="React icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={java} alt="Java icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={javascript}
              alt="JavaScript icon"
            />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={neo4j} alt="Neo4j icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={oracle} alt="Oracle icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={postman} alt="Postman icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={python} alt="Python icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={sql} alt="SQL icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={linux} alt="SQL icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={INFA} alt="SQL icon" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={stone} alt="SQL icon" />
            <p className="my-4"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
