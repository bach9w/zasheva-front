'use client';

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
} from 'lucide-react';

import Currency from '@/components/ui/currency';
import Button from '@/components/ui/button';
import { Product } from '@/types';

interface InfoProps {
	data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
	return (
		<div className=" ">
			<h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
			<div className="mt-3 flex items-end justify-between">
				<p className="text-2xl text-gray-900">
					<Currency value={data?.price} />
				</p>
			</div>
			<hr className="my-4" />
			<div className="flex flex-col gap-y-6">
				<div className="flex items-center gap-x-4">
					<h3 className="font-semibold text-black">Размер на стаята:</h3>
					<div>{data?.size?.name}</div>
				</div>
			</div>
			<div>
				<h3 className="font-semibold mt-5 text-black">Удобства</h3>
				<div className="mt-10 flex gap-x-3">
					<Wifi /> Безплатен интернет
					<ShowerHead /> Отделна баня
					<ParkingCircle /> Безплатен паркинг
					<Tv /> TV
				</div>
				<div className="mt-10 flex gap-x-3">
					<Wind /> Сешоар
					<SprayCan /> Хотелски принадлежности
					<BedDouble /> Двойно легло
					<CigaretteOff /> ПУШЕНЕТО ЗАБРАНЕНО
				</div>
			</div>
		</div>
	);
};

export default Info;
