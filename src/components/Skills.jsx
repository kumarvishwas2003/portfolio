import React from "react";
import HTML from "../assets/SVG/html.svg";
import CSS from "../assets/SVG/css.svg";
import JS from "../assets/SVG/js.svg";
import React_icon from "../assets/SVG/React.svg";
import MySql from "../assets/SVG/mysql.svg";
import Mongo from "../assets/SVG/mongo.svg";
import Node from "../assets/SVG/node.svg";
import Tail from "../assets/SVG/tailwind.svg";
import Redux from "../assets/SVG/redux.svg";
import EX from "../assets/SVG/express.svg";
import Brain from "../assets/SVG/brain.svg";
import Figma from "../assets/SVG/figma.svg";

const skillsData = {
  skills: [
    {
      name: "HTML 5",
      icon: HTML,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "CSS 3",
      icon: CSS,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Javascript",
      icon: JS,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "MySQL",
      icon: MySql,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "MongoDB",
      icon: Mongo,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Express.js",
      icon: EX,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "React.js",
      icon: React_icon,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Node.js",
      icon: Node,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Redux",
      icon: Redux,
      iconBgColor: "black",
    },
    {
      name: "DSA",
      icon: Brain,
      // iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Tailwind CSS",
      icon: Tail,
      iconBgColor: "black",
    },
    {
      name: "Figma",
      icon: Figma,
      iconBgColor: "black",
    },
  ],
};

const SkillCard = ({ skill }) => (
  <div className="min-w-[128px] h-40 rounded-lg border border-green-500 shadow-sm flex flex-col items-center justify-center p-2 bg-black hover:shadow-md transition-shadow ml-2">
    <div
      className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
      style={{ backgroundColor: skill.iconBgColor }}
    >
      <img
        src={`${skill.icon}`}
        alt={`${skill.name} icon`}
        className="w-12 h-12 object-contain bg-green-500 text-green-500 p-[5px] rounded-lg"
      />
    </div>
    <h3 className="text-md font-medium text-green-500 text-center">
      {skill.name}
    </h3>
  </div>
);

const Skills = () => {
  return (
    <div className="w-full p-6 overflow-y-hidden">
      <h2 className="text-2xl font-bold mb-4 text-green-500">Skills</h2>
      {/* <marquee behavior="" direction=""> */}
      <div className="max-w-full">
        <div className="flex">
          <div className="inline-flex gap-6 pb-4">
            {skillsData.skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
          {/* <div className="inline-flex gap-6 pb-4">
              {skillsData.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div> */}
        </div>
      </div>
      {/* </marquee> */}
    </div>
  );
};

export default Skills;
