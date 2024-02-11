"use client";

import {
	BedDouble,
	CigaretteOff,
	ParkingCircle,
	ShoppingCart,
	ShowerHead,
	SprayCan,
	Tv,
	Wifi,
	Wind,
} from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";

interface InfoProps {
	data: Product;
	locale: string;
}

const Info: React.FC<InfoProps> = ({ data, locale }) => {
	return (
		<div className=" ">
			<h1 className="text-3xl font-bold text-gray-900">
				{locale === "bg"
					? data.name
					: data.name === "Двойна стая с тераса"
					? "Double room with terrace"
					: data.name === "Двойна стая с вана"
					? "Double room with bath"
					: "Studio room with terrace"}
			</h1>
			<div className="mt-3 flex items-end justify-between">
				<p className="text-2xl text-gray-900">
					<Currency value={data?.price} />
				</p>
			</div>
			<hr className="my-4" />
			<div className="flex flex-col gap-y-6">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-black">
						{locale === "bg" ? "Размер на стаята:" : "Room size"}
					</h3>
					<div>
						{locale === "bg"
							? data?.size?.name
							: data?.size?.name === "Двойна стая"
							? "Double room"
							: data?.size?.name === "Студио"
							? "Studio"
							: "Double room"}
					</div>
				</div>
			</div>
			<div>
				<h3 className="font-semibold mt-5 text-black">
					{locale === "bg" ? "Удобства" : "Amenities"}
				</h3>
				<div className="mt-10 flex gap-x-2 text-md md:text-xl">
					<Wifi />
					{locale === "bg" ? "Безплатен интернет" : "Free Wi-Fi"}
					<ShowerHead /> {locale === "bg" ? "Отделна баня" : "Private bathroom"}
					<ParkingCircle />{" "}
					{locale === "bg" ? "Безплатен паркинг" : "Free parking"}
					<Tv /> TV
				</div>
				<div className="mt-10 flex gap-x-2 text-md md:text-xl">
					<Wind /> {locale === "bg" ? "Сешоар" : "Hairdryer"}
					<SprayCan />{" "}
					{locale === "bg" ? "Хотелски принадлежности" : "Hotel amenities"}
					<BedDouble /> {locale === "bg" ? "Двойно легло" : "Double bed"}
					<CigaretteOff />{" "}
					{locale === "bg" ? "ПУШЕНЕТО ЗАБРАНЕНО" : "NO SMOKING"}
				</div>
			</div>
		</div>
	);
};

export default Info;
