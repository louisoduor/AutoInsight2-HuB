import React from "react";

import LRR from "../assets1/LRR.png";

const About = () => {
  return (
    <div className="dark:bg-dark dark:text-white bg-slate-800 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 mt-2">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div >
            <img
              src={ LRR }
              alt=""
              className="rounded-full sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1  className=" text-orange-500 duration-300 text-3xl sm:text-4xl font-bold font-serif " > About us </h1>
              <p  className="leading-8 tracking-wide text-white text-2xl">
                Welcome to AutoInsight HuB Your Gateway to Automotive Knowledge!
              </p>
              <h1 className="text-orange-500 text-3xl sm:text-4xl font-bold font-serif" >Our Mission</h1>

              <p  className="leading-8 tracking-wide text-white text-2xl">
              Provide a one-stop destination for comprehensive and reliable information about cars and manufacturers empowering you to make wise decisions.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;