"use client";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiCctvCamera, GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const menuVariant = {
  hidden: { opacity: 1, y: "-10vw" },
  show: {
    opacity: 1,
    y: 0,
    transition: { style: "tween", duration: 0.95 },
  },
  exit: {
    y: "-10vw",
    opacity: 0,
    transition: { duration: 0.95, style: "tween", ease: "easeInOut" },
  },
};

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="fixed z-50 flex h-full w-full items-start">
        {active && (
          <>
            <AnimatePresence>
              <MotionConfig
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  variants={menuVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="fixed z-20  h-[100px] w-full bg-[#2a1e1d] p-5  "
                >
                  <div className="flex gap-4">
                    <Button className="bg-orange-500">BANSKO</Button>
                    <Button className="bg-orange-500">
                      <TiWeatherCloudy />
                    </Button>
                    <Button className="bg-orange-500">
                      <GiCctvCamera />
                    </Button>
                  </div>
                  <Badge className="flex h-20 w-full justify-center bg-black text-xl font-light">
                    ZASHEVA KASHTA
                  </Badge>
                </motion.div>
              </MotionConfig>
            </AnimatePresence>
          </>
        )}
      </div>

      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={active ? "open" : "closed"}
          onClick={() => setActive(!active)}
          className="relative z-50 flex h-20 w-20 items-center justify-center rounded-full bg-orange-500  "
        >
          <motion.span
            variants={VARIANTS.top}
            className="z-50 h-1 w-10 "
            style={{ y: "0%", left: "50%", x: "0%", top: "35%" }}
          >
            MENU
          </motion.span>
        </motion.button>
      </MotionConfig>
    </>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

const Header = () => {
  return (
    <>
      <div className="fixed  z-50 flex h-full w-full items-start justify-end text-white ">
        <AnimatedHamburgerButton />
      </div>
    </>
  );
};

export default Header;
