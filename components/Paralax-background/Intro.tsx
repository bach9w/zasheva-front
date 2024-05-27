import React from "react";
import Image from "next/image";
import Background from "../../public/intro.jpg";
import Front from "../../public/zasheva-front.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 100,
          duration: 0.51,
        }}
        className="absolute top-16 z-50 h-full w-full  object-none"
      >
        <Image
          src={Front}
          className="absolute bottom-0  z-50 h-full w-full object-none"
          alt="Front"
          width={2000}
          height={1000}
        />
      </motion.div>
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
