import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToPlans = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};
export default ScrollToPlans;
