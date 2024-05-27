import Image from "next/image";
import Background from "../../public/images/1.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-between p-20 text-white">
        <p className="w-full self-end rounded text-center text-[4vw] uppercase text-white shadow-md shadow-white drop-shadow-xl">
          Уюта и спокойствието имат нужда от внимание, дори в свят на прекалено
          много прибързаност.
        </p>
        <p className="w-full self-end rounded text-center text-[4vw] uppercase text-white shadow-md shadow-white drop-shadow-xl">
          ZASHEVA KASHTA
        </p>
      </div>
      <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
