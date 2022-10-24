import Landing from "../Componants/Landing";
import About from "../Componants/About";
import { useEffect, useState } from "react";
import Services from "../Componants/Services";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Landing />
      <About />
      <Services />
    </>
  );
}
