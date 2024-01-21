import React from "react";
import Logo from "../images/library-logo.png";

const NavBar = () => {
  return (
    <nav className="bg-[#B7ADCF]">
      <ul className="flex justify-between">
        <div className="p-3 ">
          <img
            src={Logo}
            alt="Library Logo"
            className="rounded-full w-[75px] h-[75px]"
          />
        </div>
        <div className="flex justify-around items-center p-3">
          <a href="/" className="mr-4 p-2">
            Link 1
          </a>
          <a href="/" className="mr-4 p-2">
            Link 2
          </a>
          <a href="/" className="mr-4 p-2">
            Link 3
          </a>
          <button className="bg-[#8A42F0] hover:bg-[#AB22FE] text-white font-bold py-2 px-4 rounded-full">
            Sign Up
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
