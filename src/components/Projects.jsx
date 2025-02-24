import React from "react";
import Project_comp from "./Project_comp";
import courage from '../assets/project_images/courage.jpeg'
import budget from '../assets/project_images/budget.png'
import calculator from "../assets/project_images/calculator.jpeg"
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
      },
      {
        name: "Budget Buddy",
        image: `${budget}`,
        description:
          "A finance tracker web app that helps users log daily expenses and generate a structured summary, categorized by date and day. The platform also provides the option to download a PDF report for easy financial tracking and analysis.",
      },
      {
        name: "Tic Tac Toe",
        image: `${tic}`,
        description:
          "A digital version of the classic Tic Tac Toe game, allowing two players to compete against each other. The project focuses on user-friendly UI, responsive gameplay.",
      },
      {
        name: "BMI Calculator",
        image: `${BMI}`,
        description:
          "A simple yet effective Body Mass Index (BMI) calculator built to understand the fundamentals of responsive web design. The tool takes user input (height and weight) and calculates BMI, providing health insights based on predefined BMI categories.",
      },
      {
        name: "React Calculator",
        image: `${calculator}`,
        description:
          "A basic yet functional calculator built using React, designed to perform fundamental mathematical operations like addition, subtraction, multiplication, and division. This project served as a hands-on learning experience for React state management and UI design.",
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
          className="overflow-y-auto max-h-[990px] p-2 flex flex-col gap-2  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-green-500/50
  [&::-webkit-scrollbar-thumb]:bg-green-400"
        >
          {allProjects.projects.map((element, index) => (
            <Project_comp
              key={index}
              name={element.name}
              description={element.description}
              image={element.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
