import React from "react";
import { FaFacebook,FaInstagram,FaLinkedin,FaLocationArrow,FaMobileAlt,
} from "react-icons/fa";


const Footer = () => {
  return (
    <div className="bg-slate-800  dark:bg-dark mt-2">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="text-white sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              <span className="text-7xl font-extralight text-orange-500">A</span>utoInsight HuB
            </h1>
            <p className="dark:text-gray-300  font-mono text-gray-500  text-1xl sm">
            Looking for detailed information about the best cars before making a purchase decision? <br></br>
            <br></br>
            Look no further! <br></br>
            <br></br>
            We're your ultimate destination for comprehensive details, specifications, and user reviews of a wide range of cars. 

            </p>
            <br />
            <div className="dark:text-white font-semibold  flex items-center gap-3">
              <FaLocationArrow />
              <p>Kenya, Nairobi</p>
            </div>
            <div className="dark:text-white font-semibold  flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+254 93682913</p>
            </div>

            {/* Social Handle */}
            <div className=" dark:text-white flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>

            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 text-2xl ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="text-orange-500 sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className={` font-semibold flex flex-col gap-3`}>
                  
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      Home
                    </li>

                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      Cars
                    </li>

                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      Engines
                    </li>

                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      Manufactures
                    </li>

                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                      <span>&#11162;</span>
                      About
                    </li>
                </ul>
              </div>
            </div>
        
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="text-orange-500 sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Support
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="font-bold cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                  <span>&#11162;</span>
                    Contact Us
                  </li>

                    <li className="font-bold  cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-500 dark:text-gray-200">
                  <span>&#11162;</span>
                    FAQs
                  </li>

                </ul>
              </div>
            </div>


          </div>

        </div>
      </section>

      <div className="text-center text-orange-500 text-1xl">
              <p>All Rights Reserved @ AutoInsight HuB.</p>
              <p>Terms of use and Privacy Policy.</p>
            </div>
    </div>
  );
};

export default Footer;