import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import { Hero } from "./components/Hero";
import MatrixRain from "./components/MatrixRain";
import Contact from "./components/Contact";
import React from "react";
function App() {
  return (
    <div
      className="relative min-h-screen max-h-[400px] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-green-500/50
  [&::-webkit-scrollbar-thumb]:bg-green-400"
    >
      {/* Matrix Background - fixed positioning */}
      <MatrixRain speed={0.3} />

      {/* Content Container - relative positioning with proper z-index */}
      <div className="relative z-10">
        <div className="w-full flex justify-center px-4 py-6">
          <div className="w-full max-w-[1128px]">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left Column */}
              <div className="w-full lg:w-2/3 flex flex-col gap-4">
                <div className="bg-black/90 border border-green-500/50 rounded-md shadow-lg shadow-green-500/50">
                  <Hero />
                </div>
                <div className="bg-black/90 border border-green-500/50 rounded-md shadow-lg shadow-green-500/50">
                  <Skills />
                </div>
                <div
                  className="bg-black/90 border border-green-500/50 rounded-md shadow-lg shadow-green-500/50"
                  data-tilt
                >
                  <About />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-1/3">
                <div className="bg-black/90 border border-green-500/50 rounded-md shadow-lg shadow-green-500/50 ">
                  <Projects />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black/90 border border-green-500/50 w-full mt-4 rounded-md shadow-lg shadow-green-500/50">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
