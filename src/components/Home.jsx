import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import toyota1 from "../assets1/toyota1.png"
import Authmodal from "./Authmodal";
import Navbar from "./Navbar";
import Footer from "./footer";
import logo from "../assets/logo1.png"
import backgroundImage from '../assets1/design1.png'



const Home = () => {
  // const isDarkMode = document.body.classList.contains("dark");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalopen, setisModalOpen] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };


  const toggleModal = () => {
    setisModalOpen(!isModalopen);
  };

  const toogleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div className={`bg-slate-800 dark:bg-black dark:text-white duration-300 ${isDarkMode ? 'dark' : ''}`} >
      < Navbar />

      <div className=" min-h-[620px] rounded-3xl flex" style={backgroundStyle}>

        <div className="container grid grid-cols-1 sm:grid-cols-2 place-items-center">

         {/* <div
            className=" order-1 sm:order-2"
          >
            <img
              src={toyota1}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[600px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>  */}

          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
          <div>
                        <img className="h-24" src={logo} alt="" />
                    </div>
         
            <h1
              className="text-white text-5xl  lg:text-5xl font-semibold font-serif"
            >
              <span className=" text-5xl lg:text-9xl font-extrabold text-orange-500 font-serif">A</span>utoInsight HuB
            </h1>
            <p className="text-white text-2xl font-mono ">
            Discover the <span className=" border-b border-orange-500 border-opacity-500 font-semibold text-orange-500 ">Latest Trends</span>  and <span className="border-b border-orange-500 border-opacity-500 font-semibold text-orange-500 "  >Insights</span>  in the Automotive World!
            </p>
           
            <p className="text-white text-2xl font-mono ">
             Get ready to embark on an effortless journey of auto exploration with AutoInsight!
             </p>
              
      
            <button
            onClick={toggleModal}
            className="rounded-md bg-orange-500 hover:bg-orange-400/80 transition duration-500 py-2 px-6 text-black flex"
            >
            Get Started <FaArrowCircleRight className="m-1" />
            </button>
          </div>
        </div>
      </div>
      {isModalopen && <Authmodal closeModal={toggleModal} />}
      <Footer />
    </div>
  );
};

export default Home;