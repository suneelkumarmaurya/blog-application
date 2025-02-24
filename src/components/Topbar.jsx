import React from "react";
import { Button } from "./ui/button";
import logo from "../assets/images/logo-white.png";
import { FiLogIn } from "react-icons/fi";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="flex justify-between items-center h-16 w-full fixed z-20 bg-white border-b px-5">
      <div>
        <img src={logo} alt="logo" width={120} />
      </div>
      <div className="w-[50%] bg-gray-50">
        <SearchBox />
      </div>
      <div>
        <Button asChild className="rounded-full">
          <Link to="/login">
            <FiLogIn />
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
