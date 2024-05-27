"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { IoBedOutline, IoWater } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { Badge } from "../ui/badge";
import {
  AppWindowMac,
  Bath,
  BedDouble,
  Bitcoin,
  Coffee,
  CreditCard,
  Hotel,
  InfoIcon,
  Key,
  Mountain,
  SeparatorHorizontal,
  ShowerHead,
  Tv,
  WifiIcon,
} from "lucide-react";
import {
  FaBed,
  FaMoneyBill,
  FaParking,
  FaToilet,
  FaToiletPaper,
} from "react-icons/fa";
import { FcNext, FcPrevious, FcWiFiLogo } from "react-icons/fc";
import { Button } from "../ui/button";
import { SiRevolut } from "react-icons/si";
import { GiBoxingGlove, GiGardeningShears, GiKeyCard } from "react-icons/gi";

const Rooms = () => {
  return (
    <>
      <div className="h-screen p-4 md:p-20 ">
        <div className="flex h-full w-full flex-col items-center justify-center  ">
          <h1 className="hidden text-2xl font-medium uppercase md:flex ">
            Свободни стаи за избраните дати
          </h1>
          <Card className="bg-white bg-opacity-90">
            <CardHeader>
              <Badge className="flex items-center justify-center rounded bg-red-700 text-white">
                Име на стая
              </Badge>
            </CardHeader>
            <div className="flex h-[300px] items-center justify-between  bg-white bg-opacity-100 p-5 text-black">
              <Button className="rounded-xl opacity-20 transition-opacity hover:opacity-90">
                <FcPrevious size={30} />
              </Button>
              Снимки{" "}
              <Button className="rounded-xl opacity-20 transition-opacity hover:opacity-90">
                <FcNext size={30} />
              </Button>
            </div>
            <CardContent>
              <div className="mt-3 grid grid-cols-2 gap-2 ">
                <div className="col-span-2 flex h-[150px] w-full flex-col items-center justify-center rounded bg-orange-600 bg-opacity-50 p-2  uppercase text-black shadow-lg shadow-inherit md:col-span-3 xl:col-span-4">
                  {" "}
                  <div className="flex w-full items-center justify-center gap-2 rounded-sm bg-gray-100 bg-opacity-60 p-2 text-center shadow-md shadow-white drop-shadow-lg">
                    Удобства <Mountain />
                  </div>
                  <p className=" bg-white p-2 text-[10px] ">
                    Удобна стая с гледка към планината, със собствен санитарен
                    възел, телевизор, безплатен Wi-Fi, паркинг, огромен двор с
                    маса, шезлонги, боксова круша и свеж въздух.
                  </p>
                  <div className="mt-2 grid grid-cols-6 items-center justify-center gap-3">
                    <FcWiFiLogo
                      size={30}
                      className="rounded-xl bg-gray-300 bg-opacity-20 p-1 hover:bg-blue-500"
                    />

                    <IoBedOutline
                      color="black"
                      size={30}
                      className="rounded-xl bg-gray-300 bg-opacity-20 p-1 hover:bg-blue-500"
                    />
                    <IoWater
                      size={30}
                      color="black"
                      className="rounded-xl bg-gray-300 bg-opacity-20 p-1 hover:bg-blue-500"
                    />
                    <FaToilet
                      size={30}
                      color="black"
                      className="rounded-xl bg-gray-300 bg-opacity-20 p-1 hover:bg-blue-500"
                    />
                    <FaToiletPaper
                      size={30}
                      color="black"
                      className="rounded-xl bg-gray-300 bg-opacity-20 p-1 hover:bg-blue-500"
                    />
                    <FaParking
                      size={30}
                      className="rounded-xl bg-gray-300 bg-opacity-20 p-1 hover:bg-blue-500"
                    />
                  </div>
                </div>

                <div className="col-span-1 flex h-[150px] w-full flex-col items-center justify-center rounded bg-orange-600  bg-opacity-50 p-3 uppercase text-black shadow-lg shadow-inherit">
                  {" "}
                  <div className="flex w-full  items-center justify-center gap-2 rounded-sm bg-gray-100 bg-opacity-60 p-2 text-center shadow-md shadow-white drop-shadow-lg">
                    Информация <InfoIcon />
                  </div>
                  <div
                    className=" grid h-full w-full grid-cols-3  items-center
                    justify-center"
                  >
                    <div className="flex h-full w-full items-center justify-center gap-2 bg-gray-300 bg-opacity-20 drop-shadow-3xl  hover:bg-blue-500 ">
                      2
                      <BedDouble className=" " />
                    </div>
                    <div className="flex h-full w-full items-center justify-center gap-2 bg-gray-300 bg-opacity-20 drop-shadow-3xl  hover:bg-blue-500 ">
                      1
                      <ShowerHead />
                    </div>
                    <div className="flex h-full w-full items-center justify-center gap-2 bg-gray-300 bg-opacity-20 drop-shadow-3xl  hover:bg-blue-500 ">
                      1
                      <Tv />
                    </div>
                    <div className="flex h-full w-full items-center justify-center gap-2 bg-gray-300 bg-opacity-20 drop-shadow-3xl  hover:bg-blue-500 ">
                      2
                      <Coffee />
                    </div>
                    <div className="flex h-full w-full items-center justify-center gap-2 bg-gray-300 bg-opacity-20 drop-shadow-3xl  hover:bg-blue-500 ">
                      <GiKeyCard size={30} />
                    </div>
                    <div className="flex h-full w-full items-center justify-center gap-2 bg-gray-300 bg-opacity-20 drop-shadow-3xl  hover:bg-blue-500 ">
                      <GiBoxingGlove size={30} />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex h-[150px] w-full flex-col items-center justify-center gap-4 rounded bg-orange-600  bg-opacity-50 text-white">
                  {" "}
                  Цена на стая
                  <div className="flex items-center justify-center gap-2">
                    <CreditCard />
                    <FaMoneyBill />
                    <Bitcoin />
                    <SiRevolut />
                  </div>
                  <Badge className="active:[#EADDA6] w-[80%] items-center justify-center bg-[#dde5f6] text-black hover:bg-[#4a357b] focus:outline-none focus:ring focus:ring-[#92977E] ">
                    50 ЛВ.
                  </Badge>
                </div>
                <div className="col-span-1 flex h-[150px] w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-white">
                  {" "}
                  <Button className="h-full w-full bg-black hover:bg-red-800">
                    Резервирай сега
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Rooms;
