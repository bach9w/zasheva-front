"use client";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiCctvCamera, GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const menuVariant = {
  hidden: { opacity: 1, y: "-10vw" },
  show: {
    opacity: 1,
    y: 0,
    transition: { style: "tween", duration: 0.95 },
  },
  exit: {
    y: "-10vw",
    transition: { ease: "easeInOut" },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <motion.button
        className="fixed z-50 "
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu className="fixed right-5 top-6 bg-white  " />
      </motion.button>
      {isOpen && (
        <>
          <AnimatePresence>
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
              <Badge className="flex h-20 w-full justify-center bg-white text-xl font-light">
                ZASHEVA KASHTA
              </Badge>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Header;
