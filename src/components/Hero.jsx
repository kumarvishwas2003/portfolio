import React from "react";
import banner from "../assets/images/banner.jpeg";
import profile from "../assets/images/profile.png";
import Linkedin from "../assets/SVG/linkedin.svg";
import Github from "../assets/SVG/github.svg";
import X from "../assets/SVG/x.svg";
import Download from "../assets/SVG/download.svg";

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
            <a
              href="https://www.linkedin.com/in/vishwas-kumar-web/"
              target="_blank"
            >
              <button className="p-2 rounded-full text-green-600">
                {/* <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-5 h-5 text-green-600"
                />
                ; */}
                <img src={Linkedin} alt="" className="w-8 bg-green-500" />
              </button>
            </a>
            <a href="https://github.com/kumarvishwas2003" target="_blank">
              <button className="p-2 rounded-full hover:bg-gray-100">
                {/* <Github className="w-5 h-5" /> */}
                <img src={Github} alt="" className="w-8 bg-green-500 p-px" />
              </button>
            </a>
            <a href="https://x.com/VishwasKum76893" target="_blank">
            <button className="p-2 rounded-full hover:bg-gray-100">
              {/* <Mail className="w-5 h-5 text-green-600" /> */}
              <img src={X} alt="" className="w-8 bg-green-500 p-2" />
            </button>
            </a>
          </div>
          <a
            href="./src/assets/resume.pdf"
            download="Vishwas's Resume"
            target="_blank"
          >
            <button className="px-3 py-2 border mb-3 mt-2 border-green-500 rounded-full flex items-center gap-2 bg-black-500 text-green-500 hover:bg-gray-50 font-bold">
              <img
                src={Download}
                alt=""
                className="w-8 bg-green-500 rounded-3xl p-2 font-extrabold"
              />
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
