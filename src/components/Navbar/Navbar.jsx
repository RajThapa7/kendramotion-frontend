/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from "../../../utils/classNames";
import { BiChevronDown } from "react-icons/bi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav
      className="relative flex justify-center gap-x-6 md:gap-x-16 font-bold text-lg 
      md:text-xl cursor-pointer py-8 text-white"
    >
      <div className="flex gap-x-6 md:gap-x-16 overflow-x-hidden">
        <a>Home</a>
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
        `flex flex-col items-center bg-red-500 py-4 px-3 gap-y-2 `
      )}
    >
      <a href="#" className="transition-smooth hover:translate-x-4">
        Gallery1
      </a>
      <a href="#">Gallery1</a>
    </div>
  );
};
