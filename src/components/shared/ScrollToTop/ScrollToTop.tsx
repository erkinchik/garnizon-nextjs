import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToPlans = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};
export default ScrollToPlans;
