import React from "react";

const skillsData = {
  skills: [
    {
      name: "HTML 5",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "CSS 3",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Javascript",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "MySQL",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "MongoDB",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Express.js",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "React.js",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Node.js",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Redux",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "DSA",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
    },
    {
      name: "Tailwind CSS",
      icon: "/api/placeholder/50/50",
      iconBgColor: "rgb(255, 218, 214)",
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
        src={skill.icon}
        alt={`${skill.name} icon`}
        className="w-12 h-12 object-contain"
      />
    </div>
    <h3 className="text-sm font-medium text-green-500 text-center">
      {skill.name}
    </h3>
  </div>
);

const Skills = () => {
  return (
    <div className="w-full p-6 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-green-500">Skills</h2>
      <marquee behavior="" direction="">
        <div className="max-w-full">
          <div className="flex">
            <div className="inline-flex gap-6 pb-4">
              {skillsData.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
            <div className="inline-flex gap-6 pb-4">
              {skillsData.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </marquee>
    </div>
  );
};

export default Skills;

