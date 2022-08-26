import React, { useState } from "react";
import news from "../assets/news.jpg";
import projects from "../assets/project.png";
import history from "../assets/history.png";
import events from "../assets/events.png";
import logo from "../assets/logo.png";

export const HomePage = () => {
  return (
    <div className="bg-green-600 fixed w-full h-4/5 drop-shadow-lg ">
      <div className=" flex justify-center items-center w-full xl:pt-16 lg:p-20 md:p-20 mb flex-col pt-5">
        <div className="w-40 h-40 lg:pl-8 lg:w-72 lg:h-">
          <img className=" drop-shadow-2xl" src={logo} alt="background image" />
        </div>
        <div className="font-bold l text-white justify-center flex flex-col text-center">
          {" "}
          <h1 className="  md:text-3xl xl:text-7xl 2xl:text-7xl drop-shadow-2xl lg:pt-16">
            AYUNGON NEGROS ORIENTAL
          </h1>
          <h3 className=" md:text-2xl xl:text-6xl 2xl:text-6xl drop-shadow-2xl ">
            REPUBLIC OF THE PHILIPPINES
          </h3>
        </div>
      </div>
      <div className="flex pt-5 justify-center items-center">
        <input
          className="py-3 px-10 rounded-lg opacity-80"
          type="text"
          name="search"
          placeholder="Search"
        ></input>
      </div>

      <div className=" 2xl:pt-36  2xl:px-72  xl-pt-20 xl:pt-36 xl:px-60 lg:px-40 lg:pt-46 md:pt-48 sm:pt-16  sm:px-52 px-28 py-8 ">
        <ul className="  rounded-lg gap-5 bg-white p-10 drop-shadow-2xl flex lg:gap-20  md:gap-20 md:flex-row flex-col  2xl:gap-x-44 text-center items-center justify-center">
          <div className="  flex flex-row gap-1 items-center">
            <div>
              {" "}
              <img className=" w-8 " src={news} alt="" />
            </div>
            <div>
              <li className="cursor-pointer">News</li>
            </div>
          </div>
          <div className=" flex flex-row gap-1 items-center">
            <div>
              {" "}
              <img className="w-8 " src={projects} alt="" />
            </div>
            <div>
              <li className="cursor-pointer">Projects</li>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div>
              {" "}
              <img className=" w-8 " src={history} alt="" />
            </div>
            <div>
              <li className="cursor-pointer">History</li>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div>
              {" "}
              <img className="w-8 " src={events} alt="" />
            </div>
            <div>
              <li className="cursor-pointer">Events</li>
            </div>
          </div>
        </ul>
      </div>

      <footer className=" relative pb-0 flex justify-center 2xl:pt-6 md:pt-10 xl:pt-10 lg:pt-10 sm:pt-20 pt-32">
        <h1 className=" absolute lg:text-lg">
          © 2020 www.ayungon.gov.ph | all rights reserved.
        </h1>
      </footer>
    </div>
  );
};

export default HomePage;
