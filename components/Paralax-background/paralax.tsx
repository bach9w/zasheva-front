"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Intro from "./Intro";
import Description from "./Description";
import Section from "./Section";

const ParalaxHero = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Intro />
      <Description />
      <Section />
    </div>
  );
};

export default ParalaxHero;
