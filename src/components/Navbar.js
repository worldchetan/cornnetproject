import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="fixed z-20 w-full h-20 bg-indigo-100 text-gray-600">
        <ul className="flex items-center justify-between h-full px-10">
          <button onClick={() => setToggle(!toggle)}> ☰</button>

          <Link to="/">
            <li> products</li>
          </Link>

          <Link to="/liveportal">
            <li> Add products</li>
          </Link>
        </ul>
      </nav>
      {toggle ? <Sidebar /> : ""}
    </div>
  );
}
