'use client';

import {
	ParkingCircle,
	ShoppingCart,
	ShowerHead,
	Tv,
	Wifi,
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
					<h3 className="font-semibold text-black">Room Size:</h3>
					<div>{data?.size?.name}</div>
				</div>
			</div>
			<div>
				<h3 className="font-semibold mt-5 text-black">Facilities</h3>
				<div className="mt-10 flex gap-x-3">
					<Wifi /> Free Wi-Fi
					<ShowerHead /> Private Bathroom
					<ParkingCircle /> Free Parking
					<Tv /> TV
				</div>
			</div>
		</div>
	);
};

export default Info;
