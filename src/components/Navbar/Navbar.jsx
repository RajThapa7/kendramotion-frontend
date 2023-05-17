import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="flex justify-center bg-blue-500 z-0 font-bold text-lg md:text-xl gap-x-6 md:gap-x-16 text-white py-8 cursor-pointer">
      <div className="flex  gap-x-6 md:gap-x-16 overflow-x-hidden">
        <>Home</>
        <a>About</a>
        <a>Projects</a>
      </div>
      <div className="relative">
        <div
          onClick={() => setDropdown((prev) => !prev)}
          className="flex items-center"
        >
          <a>Contact</a>
          <BiChevronDown
            size={25}
            className={`${dropdown ? "rotate-180" : ""} transition-smooth`}
          />
        </div>
        {dropdown && <DropdownMenu />}
      </div>
    </div>
  );
}

const DropdownMenu = () => {
  return (
    <div className="flex flex-col items-center absolute right-0 bg-red-500 z-20 top-10 py-4 px-3 gap-y-2 ">
      <a href="#" className="transition-smooth hover:translate-x-4">
        Gallery1
      </a>
      <a href="#">Gallery1</a>
    </div>
  );
};
