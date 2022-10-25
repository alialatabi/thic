import Landing from "../Componants/Landing";
import About from "../Componants/About";
import { useEffect, useState } from "react";
import Services from "../Componants/Services";
import Team from "../Componants/Team";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Team />
    </>
  );
}
