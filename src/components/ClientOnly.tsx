import { useEffect, useState } from "react";
import Loader from "./common/Loader/Loader";

export default function ClientOnly({
  children,
}: {
  children: React.ReactElement;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loader />;

  return children;
}
