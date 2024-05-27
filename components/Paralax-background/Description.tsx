import React from "react";
import Image from "next/image";
import { ArrowBigDown } from "lucide-react";
import Logo from "../../public/bansko.png";

export default function Description() {
  return (
    <div className="my-40 flex h-full flex-col items-center justify-center ">
      <p className="max-w-[50vw] text-center text-[7.5vw] uppercase leading-none">
        Мечтаната зимна или лятна почивка
      </p>
      <ArrowBigDown
        className="relative top-20 animate-pulse"
        color="gray"
        size={100}
      />
      <div className="relative top-[180px] flex w-full items-center justify-between p-6 uppercase">
        <Image src={Logo} alt="Bansko Logo" width={60} height={100} />
        Град Банско
      </div>
    </div>
  );
}
