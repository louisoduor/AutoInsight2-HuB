import React, { useState } from "react";
import toyota1 from "../../assets1/toyota1.png"
import Navbar from "../Navbar";
import About from "../About";
import CarLists from "../CarLists";
import Footer from "../footer";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
  <>
    <div className={`bg-slate-300 dark:bg-black dark:text-white duration-300 ${isDarkMode ? 'dark' : ''}`}>
       < Navbar />

      <div className="container min-h-[620px] flex">

        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">

          <div
            className="order-1 sm:order-2"
          >
            <img
              src={toyota1}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[600px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>

          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">

            <h1
              className="text-5xl lg:text-4xl font-semibold font-serif"
            >
              <span className="text-5xl lg:text-9xl font-extrabold text-orange-500 font-serif">W</span>elcome to AutoInsight HuB!
            </h1>
            <p className="font-mono">
              AutoInsight is your go-to platform for comprehensive information about cars, engines, and manufacturers.
              <br />
              <br />
              Whether you are a car enthusiast, a researcher, or just curious about the automotive world, AutoInsight provides a hub for exploring and understanding the automotive industry.
              <br /> <br />
              Our platform offers a user-friendly experience, allowing you to discover details about various cars, engines, and manufacturers. Stay informed about the latest trends, innovations, and updates in the automotive world.

            </p>
          </div>
        </div>
       </div>
       <About />
       <CarLists />
       <Footer />
      </div>
  </>
  );
};

export default Hero;