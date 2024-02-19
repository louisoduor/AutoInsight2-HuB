import React, { useState } from "react";

import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import logo from "../assets/logo1.png"

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function onDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
      document.documentElement.classList.toggle("dark", isDarkMode);
    };

    return (
    <>
        <nav className="dark:bg-black dark:text-white duration-300">
            <div className="container" >
                <div className="flex justify-between items-center">

                    <div>
                    </div>
                    <div className="md:flex">
                        <ul className="flex items-center gap-8">
                            <li className="py-4"> <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary font-medium" href="#"></a></li>
                           <li className="py-4"> <a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary font-medium" href="#"></a></li>


                            {isDarkMode ? <BiSolidMoon   style={{ cursor: 'pointer' }}  onClick={onDarkModeClick}/> : <BiSolidSun  style={{ cursor: 'pointer' }} onClick={onDarkModeClick} />} 


                        </ul>
                    </div>

                  
                </div>
            </div>
            
        </nav>

</>
    );
};

export default Navbar;
