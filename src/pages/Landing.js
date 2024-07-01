import React from "react";
import warBackground from "../assets/Background.mp4";
import settingsIcon from "../assets/settingsIcon.png";
import codingpic from "../assets/coding.jpg";
import hassanPic from "../assets/hassanProfilePic.jpeg";
import { Link } from "react-router-dom";

function Landing() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const years = currentYear - 2023;

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <div className="flex w-full z-50 mt-8 px-8 justify-between items-center">
        <p className=" text-white text-2xl font-[impact] ">PORTFOLIO</p>
        <div>
          <div className="flex h-8 p-1 rounded border-[1px] border-gray-500 bg-black/[.3] items-center ">
            <img src={settingsIcon} alt="" className="w-6 h-6" />
            <div className="ml-2 w-[1px] h-full bg-gray-500 rounded" />
            <div>
              <p className="ml-2 text-white font-semibold">{years} yrs</p>
            </div>
          </div>
        </div>
      </div>
      <video
        src={warBackground}
        loop
        muted
        autoPlay
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute top-[30%] flex h-1/2 gap-8">
        <div className=" grid grid-cols-4 gap-2 w-4/6 h-full text-white text-center">
          <Link
            to={"/projects"}
            className="w-full h-full cursor-pointer opacity-75 hover:opacity-100 brightness-50 hover:brightness-100 duration-700 overflow-hidden">
            <div className=" w-full h-full ">
              <img
                src={codingpic}
                alt=""
                className=" w-full h-full object-cover hover:scale-125 duration-700"
              />
              <h1 className="relative bottom-[50%] mt-8 text-2xl text-orange-500 font-bold">
                PROJECTS
              </h1>
            </div>
          </Link>
          <div className=" w-full h-full bg-orange-500 cursor-pointer opacity-75 hover:opacity-100 brightness-50 hover:brightness-100 duration-700 overflow-hidden">
            <h1 className="mt-[82%] text-2xl font-bold">RESUME</h1>
          </div>
          <div className=" w-full h-full group cursor-pointer opacity-75 hover:opacity-100 brightness-50 hover:brightness-100 duration-700 overflow-hidden">
            <img
              src={hassanPic}
              alt=""
              className=" w-full h-full object-cover hover:scale-125 duration-700"
            />
            <h1 className="relative bottom-[50%] mt-8 text-2xl text-violet-700 font-bold">
              ABOUT
            </h1>
          </div>
          <div className=" w-full h-full cursor-pointer bg-violet-700 opacity-75 hover:opacity-100 brightness-50 hover:brightness-100 duration-700 overflow-hidden">
            <h1 className="mt-[82%] text-2xl font-bold">CONTACT ME</h1>
          </div>
        </div>
        <div className="mt-[10%] text-center text-2xl text-white font-bold">
          <p>HASSAN WILSON</p>
          <p className="text-5xl font-thin font-[impact] ">
            FRONTEND DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
