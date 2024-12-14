import React, { useState, useEffect } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [modalOpen, setModalOpen] = useState(true); // Track modal visibility

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling on body
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling on body
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup on component unmount
    };
  }, [modalOpen]);

  return (
    <section className="absolute min-h-screen z-50 flex justify-center overflow-hidden items-center bg-[#00000090] inset-0 bg-black bg-opacity-50 backdrop-blur-md">
      {/* Login Form */}
      <div className="relative z-20 bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        <form className="mx-auto">
          {/* Close Icon */}
          <img
            className="absolute top-6 right-6 w-5 h-5 cursor-pointer"
            onClick={() => {
              setShowLogin(false);
              setModalOpen(false);
            }}
            src={assets.cross_icon}
            alt="Close"
          />
          <div className="mb-11 text-center">
            <h2>{currState}</h2>
            <h1 className="text-gray-900 font-manrope text-3xl font-bold leading-10 mb-2">
              GOFOOD
            </h1>
            <p className="text-gray-500 text-base font-medium leading-6">
              Let’s get your food, order Now
            </p>
          </div>
          <div>
            <input
              type="text"
              className="w-full h-12 text-gray-900 placeholder-gray-400 text-lg font-normal rounded-md border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
              placeholder="Username"
            />
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                type="text"
                className="w-full h-12 text-gray-900 placeholder-gray-400 text-lg font-normal rounded-md border-gray-300 border shadow-sm focus:outline-none px-4 mb-6"
                placeholder="Email"
              />
            )}
          </div>
          <input
            type="password"
            className="w-full h-12 text-gray-900 placeholder-gray-400 text-lg font-normal rounded-md border-gray-300 border shadow-sm focus:outline-none px-4 mb-1"
            placeholder="Password"
          />
          <a href="#" className="flex justify-end mb-6">
            <span className="text-slate-800 text-right text-base font-normal leading-6 hover:text-slate-700">
              Forgot Password?
            </span>
          </a>
          <button className="w-full h-12 text-white text-center text-base font-semibold leading-6 rounded-md hover:bg-slate-700 transition-all duration-300 bg-slate-800 shadow-sm mb-11">
            {currState}
          </button>
          <a
            href="#"
            className="flex justify-center text-gray-900 text-base font-medium leading-6"
          >
            <button>
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </button>
            &nbsp;|| Don’t have an account?
            <span
              onClick={() =>
                setCurrState(currState === "Login" ? "Sign Up" : "Login")
              }
              className="text-slate-800 hover:text-slate-700 font-semibold pl-3 cursor-pointer"
            >
              {currState === "Login" ? "Sign Up" : "Login"}
            </span>
          </a>
        </form>
      </div>
    </section>
  );
};

export default Login;

