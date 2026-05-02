import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Esto mueve el scroll al inicio cada vez que cambias de página
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;