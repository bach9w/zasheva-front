import React from "react";
import Image from "next/image";
import { ArrowBigDown } from "lucide-react";
import Logo from "../../public/bansko.png";
import { FlipWords } from "../ui/flip-words";

export default function Description() {
  const words = ["зимна", "лятна"];
  return (
    <div className="my-20 flex h-full flex-col items-center justify-center ">
      <div className="flex  items-center justify-center px-4">
        <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          Мечтана
          <FlipWords words={words} /> <br />
          почивка в Банско
        </div>
      </div>
      <ArrowBigDown
        className="relative top-[200px]  animate-bounce "
        color="gray"
        size={100}
      />
      <div className="relative top-[100px] flex w-full items-center justify-between p-6 uppercase">
        <Image src={Logo} alt="Bansko Logo" width={60} height={100} />
        Град Банско
      </div>
    </div>
  );
}
