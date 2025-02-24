import React from "react";
import Project_comp from "./Project_comp";
const Projects = () => {
  const allProjects = {
    projects: [
      {
        name: "TierSync",
        image: "tiersync.png",
        description:
          "A platform connecting students from different tier colleges for collaboration and community building.",
      },
      {
        name: "College Event Manager",
        image: "event_manager.png",
        description:
          "A system for club presidents to manage events, send QR-coded tickets, and track attendance.",
      },
      {
        name: "Fit Counter",
        image: "fit_counter.png",
        description:
          "A fitness app that suggests YouTube workout videos based on selected exercise types.",
      },
      {
        name: "Budget Buddy",
        image: "budget_buddy.png",
        description:
          "A finance tracker that records expenses and automates transaction updates via SMS.",
      },
      {
        name: "Task Manager",
        image: "task_manager.png",
        description:
          "A React and Firebase-based task management app with authentication and real-time updates.",
      },
    ],
  };

  return (
    <>
      <div className="main px-3 overflow-auto h-full border-green-500 border-2 rounded-md">
        <div className="font-bold mt-3 text-xl text-green-500 mb-2">
          Projects
        </div>
        <div className="overflow-y-auto max-h-[990px] p-2 flex flex-col gap-2">
          {allProjects.projects.map((element, index) => (
            <Project_comp
              key={index}
              name={element.name}
              description={element.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
