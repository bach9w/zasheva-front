'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Image as ImageType } from '@/types';

interface GalleryProps {
	images: ImageType[];
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 20;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
	type: 'spring',
	mass: 3,
	stiffness: 400,
	damping: 50,
};

export const SwipeCarousel = ({ images }: GalleryProps) => {
	const [imgIndex, setImgIndex] = useState(0);

	const dragX = useMotionValue(0);

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const x = dragX.get();

			if (x === 0) {
				setImgIndex((pv) => {
					if (pv === images.length - 1) {
						return 0;
					}
					return pv + 1;
				});
			}
		}, AUTO_DELAY);

		return () => clearInterval(intervalRef);
	}, [dragX, images.length]);

	const onDragEnd = () => {
		const x = dragX.get();

		if (x <= -DRAG_BUFFER && imgIndex < images.length - 1) {
			setImgIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && imgIndex > 0) {
			setImgIndex((pv) => pv - 1);
		}
	};

	return (
		<div className="relative overflow-hidden py-5">
			<motion.div
				drag="x"
				dragConstraints={{
					left: 0,
					right: 0,
				}}
				style={{
					x: dragX,
				}}
				animate={{
					translateX: `-${imgIndex * 100}%`,
				}}
				transition={SPRING_OPTIONS}
				onDragEnd={onDragEnd}
				className="flex cursor-grab items-center active:cursor-grabbing"
			>
				<Images imgIndex={imgIndex} images={images} />
			</motion.div>

			<Dots imgIndex={imgIndex} setImgIndex={setImgIndex} images={images} />
		</div>
	);
};

const Images = ({
	imgIndex,
	images,
}: {
	imgIndex: number;
	images: ImageType[];
}) => {
	return (
		<>
			{images.map((image, idx) => {
				return (
					<motion.div
						key={idx}
						style={{
							backgroundImage: `url(${image.url})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
						animate={{
							scale: imgIndex === idx ? 0.95 : 0.85,
						}}
						transition={SPRING_OPTIONS}
						className="aspect-square w-full shrink-0 rounded-xl  object-cover"
					/>
				);
			})}
		</>
	);
};

const Dots = ({
	imgIndex,
	setImgIndex,
	images,
}: {
	imgIndex: number;
	setImgIndex: Dispatch<SetStateAction<number>>;
	images: ImageType[];
}) => {
	return (
		<div className="mt-4 flex w-full justify-center gap-2">
			{images.map((_, idx) => {
				return (
					<button
						key={idx}
						onClick={() => setImgIndex(idx)}
						className={`h-3 w-3 rounded-full transition-colors ${
							idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
						}`}
					/>
				);
			})}
		</div>
	);
};
