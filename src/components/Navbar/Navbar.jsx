/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from "../../../utils/classNames";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [dropdown, setDropdown] = useState(false);

  console.log("Location", location.pathname);

  return (
    <nav
      className={classNames(
        "absolute -translate-x-1/2 left-1/2 top-5 flex justify-center gap-x-6 md:gap-x-16 font-bold text-lgmd:text-xl cursor-pointer py-8",
        location.pathname === "/" ? "text-white" : "text-black"
      )}
    >
      <div className="flex gap-x-6 md:gap-x-16 overflow-x-hidden">
        <a onClick={() => navigate("/")}>Home</a>
        <a>About</a>
        <a>Projects</a>
      </div>
      <div
        onClick={() => setDropdown((prev) => !prev)}
        className="flex items-center relative"
      >
        <a>Contact</a>
        <BiChevronDown
          size={25}
          className={`${
            dropdown ? "rotate-180" : "rotate-0"
          } transition-smooth`}
        />
        {dropdown && <DropdownMenu className="absolute top-8 right-0" />}
      </div>
    </nav>
  );
}

const DropdownMenu = ({ className }) => {
  return (
    <div
      className={classNames(
        className,
        `flex flex-col items-center py-6 px-7 rounded-md gap-y-4 bg-black bg-opacity-20`
      )}
    >
      <a href="#" className="transition-smooth hover:translate-x-4">
        Gallery1
      </a>
      <a href="#" className="transition-smooth hover:translate-x-4">
        Gallery1
      </a>
    </div>
  );
};
