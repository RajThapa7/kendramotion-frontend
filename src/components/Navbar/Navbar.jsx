import classNames from "../../../utils/classNames";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav
      className={classNames(
        "absolute -translate-x-1/2 left-1/2 top-5 flex justify-center gap-x-6 md:gap-x-16 font-semibold text-lg md:text-xl cursor-pointer py-8",
        location.pathname === "/" ? "text-white" : "text-black"
      )}
    >
      <div className="flex gap-x-6 md:gap-x-16 overflow-x-hidden">
        <a className="hover:opacity-60" onClick={() => navigate("/")}>
          Home
        </a>
        <a className="hover:opacity-60" onClick={() => navigate("/videos")}>
          Videos
        </a>
        <a className="hover:opacity-60" onClick={() => navigate("/artists")}>
          Artists
        </a>
        <a className="hover:opacity-60">Contact</a>
      </div>
    </nav>
  );
}
