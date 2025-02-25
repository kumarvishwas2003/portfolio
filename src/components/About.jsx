import React from "react";
import "../components/About.css";
const About = () => {
  return (
    <div>
      <div className="font-bold mt-4 ml-4 text-2xl text-green-500">About</div>
      <div className="text-green-500 p-4 text-md text-justify tracking-tight">
        <div className="text-2xl flex gap-2 mb-3 items-center justify-center">
          {" "}
          <div className="font-bold animate-bounce">Hey there!</div>
          <div className="wiggle text-5xl">👋</div>
        </div>
        I’m a passionate full-stack developer with a deep love for crafting
        seamless digital experiences. From designing pixel-perfect UI components
        to building robust backend architectures, I thrive on turning ideas into
        reality. I specialize in modern web technologies, ensuring every project
        is built for performance, scalability, and user engagement.
        <br />
        My expertise includes:
        <br />
        <span className="text-green-500 font-bold animate-pulse">
          Front-End Magic:
        </span>{" "}
        HTML, CSS, SCSS, Tailwind CSS, JavaScript, React.js, and WordPress
        (Elementor).
        <br />{" "}
        <span className="text-green-500 font-bold animate-pulse">
          Back-End Power:
        </span>{" "}
        Node.js, Express.js, MongoDB.
        <br />{" "}
        <span className="text-green-500 font-bold animate-pulse">
          Core Programming & Logic:
        </span>{" "}
        Java, Data Structures & Algorithms (DSA).
        <br />
        <span className="text-green-500 font-bold animate-pulse">
          AI & Automation:
        </span>{" "}
        ChatGPT, DeepSeek, and other AI-driven tools.
        <br /> I love staying ahead of the curve, constantly exploring new
        technologies, and optimizing workflows for efficiency and innovation. If
        you're looking for a developer who brings creativity, precision, and a
        problem-solving mindset, let’s connect and build something amazing
        together!
      </div>
    </div>
  );
};

export default About;
