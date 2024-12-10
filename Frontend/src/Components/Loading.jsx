import React from "react";
import logo from "../assets/logo.png";

function Loading() {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center transform transition-all duration-1000 ">
      <div className="w-32 h-32 mt-60 border-8 text-indigo-500 backdrop:  text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-indigo-500 rounded-full">
        <img className="rounded-full" src={logo} alt="logo Image" />
      </div>
      <h4 className="font-bold text-indigo-500">Loading...</h4>
    </div>
  );
}

export default Loading;
