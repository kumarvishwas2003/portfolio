import React from "react";
import banner from "../assets/images/banner.jpeg";
import profile from "../assets/images/profile.png";
import { Download, Linkedin, Github, Mail } from "lucide-react";
export const Hero = () => {
  return (
    <>
      <div className="main tracking-tighter" data-tilt>
        <div className="banner w-full h-[170px] relative border-b-2  bg-green-500 ">
          <img
            src={banner}
            alt=""
            className="-z-10 border-green-500 border-b-2 shadow-lg shadow-green-500/50 "
          />
        </div>
        <div
          className="profile w-[130px] h-[130px] -mt-16 ml-5 z-10 rounded-full absolute bg-cover bg-center border border-green-500/50 bg-green-600 shadow-lg shadow-green-500/50"
          style={{ backgroundImage: `url(${profile})` }}
        ></div>

        <div className="mt-20 px-2 text-green-500">
          <h1 className="text-[30px] font-semibold">Vishwas Kumar</h1>
          <h2 className="text-md  font-semibold ">
            MERN Stack Developer | Wordpress Developer | DSA Learner
          </h2>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-600 text-[14px]">Karnataka India</span>
            <button className="text-green-600 font-medium text-[14px]">
              Contact Info
            </button>
          </div>

          {/* Social Links */}
          <div className="flex">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Linkedin className="w-5 h-5 text-green-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Github className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Mail className="w-5 h-5 text-green-600" />
            </button>
          </div>
          <a
            href="./src/assets/resume.pdf"
            download="Vishwas's Resume"
            target="_blank"
          >
            <button className="px-2 py-2 border mb-3 border-green-500 rounded-full flex items-center gap-2 bg-black-500 text-green-500 hover:bg-gray-50 font-bold">
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
