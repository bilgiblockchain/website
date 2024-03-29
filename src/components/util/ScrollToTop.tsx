import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
