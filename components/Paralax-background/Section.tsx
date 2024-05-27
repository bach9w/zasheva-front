import Image from "next/image";
import Background from "../../public/background.png";
import Center from "../../public/images/hero.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/moving-border";
import { TiArrowDown } from "react-icons/ti";

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
      <div className="relative z-10 flex  h-full w-full flex-col items-center  justify-between p-20 text-white">
        <Button
          borderRadius="1.75rem"
          className=" border-sky-800 bg-slate-600 bg-opacity-20 text-[12px] text-white md:text-xl"
        >
          Уюта и спокойствието имат нужда от внимание, дори в свят на прекалено
          много прибързаност.
        </Button>
        <TiArrowDown className="animate-bounce" size={250} />
        <Button
          borderRadius="1.75rem"
          className="  border-sky-800 bg-slate-600 bg-opacity-20  text-white"
        >
          ZASHEVA KASHTA
        </Button>
      </div>
      <div className="fixed left-0 top-[-10vh] h-[120vh] w-full">
        <motion.div style={{ y }} className="relative h-full w-full">
          <Image src={Center} fill alt="image" style={{ objectFit: "cover" }} />
        </motion.div>
      </div>
    </div>
  );
}
