import ScrollToTop from "react-scroll-to-top";
import ScrollToTopIcon from "../../components/ScrollToTop/ScrollToTop";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AppLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="px-5 md:px-10 lg:px-24">
      <div className="opacity-60 hover:opacity-100 transition-smooth hidden lg:flex">
        <ScrollToTop smooth component={<ScrollToTopIcon />} />
      </div>
      <Navbar />
      {children}
    </div>
  );
}
