import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterAndLogin from "../RegisterAndLogin";
import ForgotPassword from "./ForgotPassword";
import Hero from "./Hero";

function PasswordLoginWithFirebase(){
    const [isAuthenthicated, setisAuthenthicated] = useState(false);

    return(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route 
                        path="/"
                        element={
                            isAuthenthicated ? (
                                <Navigate to="/Hero" />
                            ) : (
                                <RegisterAndLogin setisAuthenthicated={setisAuthenthicated} />
                            )
                        }
                    />
                    <Route path="/Hero" element={<Hero />} />
                    <Route path="/reset" element={<ForgotPassword />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default PasswordLoginWithFirebase;
