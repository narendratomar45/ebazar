import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
  const location = useLocation();
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    const timeout = setTimeout(scrollToTop, 0);
    return () => clearTimeout(timeout);
  }, [location]);
};

export default Scroll;
