'use client';

import React, { useState } from 'react';

import { Image as ImageType } from '@/types';

import GalerryTab from './gallery-tab';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';
import Button from '../button';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

interface GalleryProps {
	images: ImageType[];
}
const Gallery: React.FC<GalleryProps> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlers = useSwipeable({
		onSwipedLeft: () => handleNext(),
		onSwipedRight: () => handlePrevious(),
	
		trackMouse: true,
	});

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => {
			return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
		});
	};

	return (
		<div className="static">
			<div
				{...handlers}
				className="relative overflow-hidden mx-auto"
				style={{ width: '90%', height: '70%' }}
			>
				<Image
					width={300}
					height={300}
					src={images[currentIndex].url}
					alt={images[currentIndex].id}
					className="block w-full h-auto"
				/>

				<div className="relative mt-2 w-auto flex h-[50px] justify-center items-center  bottom-0  bg-white border-4 border-black text-white py-1 px-3 rounded">
					<Button
						onClick={handlePrevious}
						className="absolute left-5 top-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 m-2 rounded-full focus:outline-none"
					>
						<ArrowBigLeft size={20} />
					</Button>
					<Button className="bg-black absolute object-center justify-center h-[90%]">
						{`${currentIndex + 1} | ${images.length}`}
					</Button>
					<Button
						onClick={handleNext}
						className="absolute right-5 top-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 m-2 rounded-full focus:outline-none"
					>
						<ArrowBigRight size={20} />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
