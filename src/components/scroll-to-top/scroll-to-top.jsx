import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ height }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return null;
}

export default ScrollToTop;
