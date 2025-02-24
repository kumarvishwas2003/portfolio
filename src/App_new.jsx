import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import { Hero } from "./components/Hero";
import { Matrix } from "react-matrix";

function App() {
  return (


      {/* Content Container */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        <div className="w-full flex justify-center px-4 py-6">
          <div className="w-full max-w-[1128px]">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Left Column */}
              <div className="w-full lg:w-2/3 flex flex-col gap-4">
                <div className="bg-black/80 border border-green-500 rounded-md backdrop-blur-sm">
                  <Hero />
                </div>
                <div className="bg-black/80 border border-green-500 rounded-md backdrop-blur-sm">
                  <Skills />
                </div>
                <div className="bg-black/80 border border-green-500 rounded-md backdrop-blur-sm">
                  <About />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:w-1/3">
                <div className="bg-black/80 border border-green-500 rounded-md backdrop-blur-sm">
                  <Projects />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-black/80 border border-green-500 w-full h-72 mt-4 rounded-md backdrop-blur-sm">
              bottom
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
