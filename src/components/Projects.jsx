import React from "react";
import Project_comp from "./Project_comp";
import courage from "../assets/project_images/courage.jpeg";
import budget from "../assets/project_images/budget.png";
import calculator from "../assets/project_images/calculator.jpeg";
import BMI from "../assets/project_images/BMI.jpeg";
import tic from "../assets/project_images/tic.png";
const Projects = () => {
  const allProjects = {
    projects: [
      {
        name: "Courage GPT",
        image: `${courage}`,
        description:
          "A fun and interactive chatbot inspired by the computer from the cartoon 'Courage the Cowardly Dog.' It generates sarcastic, hilarious, and dry humorous responses. The chatbot also features text-to-speech integration to make conversations even more engaging.",
        live: "https://courage-gpt.vercel.app/",
        github: "https://github.com/kumarvishwas2003/Courage-GPT",
        techStack: ["React.js", "Tailwind CSS", "GroqCloud API"],
      },

      {
        name: "Budget Buddy",
        image: `${budget}`,
        description:
          "A finance tracker web app that helps users log daily expenses and generate a structured summary, categorized by date and day. The platform also provides the option to download a PDF report for easy financial tracking and analysis.",
        live: "https://your-live-link.com/budget-buddy", // {/* live ot yet present */}
        github: "https://github.com/kumarvishwas2003/Budget-Buddy",
        techStack: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
      },
      {
        name: "Tic Tac Toe",
        image: `${tic}`,
        description:
          "A digital version of the classic Tic Tac Toe game, allowing two players to compete against each other. The project focuses on user-friendly UI, responsive gameplay.",
        live: "https://kumarvishwas2003.github.io/TIC-TAC/",
        github: "https://github.com/kumarvishwas2003/TIC-TAC",
        techStack: ["HTML", "CSS", "JavaScript"],
      },
      {
        name: "BMI Calculator",
        image: `${BMI}`,
        description:
          "A simple yet effective Body Mass Index (BMI) calculator built to understand the fundamentals of responsive web design. The tool takes user input (height and weight) and calculates BMI, providing health insights based on predefined BMI categories.",
        live: "https://kumarvishwas2003.github.io/BMI/",
        github: "https://github.com/kumarvishwas2003/BMI",
        techStack: ["HTML", "Tailwind CSS", "JavaScript"],
      },
      {
        name: "React Calculator",
        image: `${calculator}`,
        description:
          "A basic yet functional calculator built using React, designed to perform fundamental mathematical operations like addition, subtraction, multiplication, and division. This project served as a hands-on learning experience for React state management and UI design.",
        live: "https://main--react-calculator-dark-mode.netlify.app/",
        github: "https://github.com/kumarvishwas2003/react-calculator",
        techStack: ["React.js"],
      },
    ],
  };

  return (
    <>
      <div className="main px-3 overflow-auto h-full border-green-500 border-2 rounded-md">
        <div className="font-bold mt-3 text-xl text-green-500 mb-2">
          Projects
        </div>
        <div
          className="overflow-y-auto max-h-[1006px] p-2 flex flex-col gap-2  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-green-500/50
  [&::-webkit-scrollbar-thumb]:bg-green-400"
        >
          {allProjects.projects.map((element, index) => (
            <Project_comp
              key={index}
              name={element.name}
              description={element.description}
              image={element.image}
              live={element.live}
              github={element.github}
              techstack={element.techStack}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
