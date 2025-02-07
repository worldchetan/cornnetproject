import React from "react";
import Navbar from "./Navbar";
const Sidebar = () => {
  return (
    <div className="fixed z-10">
      {/* <Navbar /> */}

      <div className="flex flex-col w-40 h-screen bg-gray-200">
        <div className="side-nav-bar h-full flex flex-col px-6 py-6 bg-gray-200 shadow-xl justify-start items-left w-1/4">
          <div className="container bg-gray-400 p-2 my-6 text-gray-600 rounded-md shadow-xl">
            <h3 className="pt-10">Welcome, To Cornnet</h3>
          </div>
          <a
            href="/"
            className="flex my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
          >
            <i className="fas fa-home" />
            <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
              Dashboard
            </span>
          </a>
          <a
            href="/liveportal"
            className="flex my-4 text-gray-600 hover:text-indigo-600 transition duration-700 ease-in-out"
          >
            <i className="fas fa-ticket-alt" />
            <span className="text ml-2 text-xs uppercase tracking-wide font-medium">
              Add Products
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
