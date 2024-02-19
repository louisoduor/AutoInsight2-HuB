import React, { useState } from "react";
import { auth } from "./Auth/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  // const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword( auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/hero");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword( auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/hero");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    const email = prompt ('Please enter your email');
    sendPasswordResetEmail(auth,email);
    alert('Email sent! Check your inbox for password reset instructions.')
   }
  return (
    <div className="bg-white text-orange-500 p-4">
      {/* Registration and login Screen */}
      <div className="flex items-center mb-4 space-x-4">
        <button
          // className={login == false ? "activeColor" : "pointer"}
          className={'cursor-pointer ${login && " text-black bg-orange-500 rounded-full p-2 "}'}
          onClick={() => setLogin(false)}
        >
          Sign Up
        </button>
        <div
          // className={login == true ? "activeColor" : "pointer"}
          className={'cursor-pointer ${login && " text-black bg-orange-500 rounded-full p-2 "}'}
          onClick={() => setLogin(true)}
        >
          Sign In
        </div>
      </div>
      {/* <h1 className="text-2xl font-bold">{login ? "SignIn" : "SignUp"}</h1> */}
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
        {/* <input name="email" placeholder="Email" /> */}
        <input
          className="bg-gray-300 text-black text-2xl rounded p-2 mb-3"
          name="email"
          placeholder="Email"
        />
        <br />
        {/* <input name="password" type="text" placeholder="Password" /> */}
        <input
          className="bg-gray-300 text-black text-2xl rounded p-2 mb-2"
          name="password"
          type="password"
          placeholder="Password"
        />
        <br />
 
         <p className="text-sm cursor-pointer " onClick={handleReset}>
          Forgot Password?
        </p>
        <br />
        <button
          className="text-black  bg-orange-500 rounded p-2"
        >
          {login ? "LogIn" : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
export default RegisterAndLogin;