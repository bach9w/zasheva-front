'use client';
import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { Image as ImageType } from '@/types';

import { MoveRight } from 'lucide-react';

interface GalleryProps {
	images: ImageType[];
}

const variants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		zIndex: 1,
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
	return Math.abs(offset) * velocity;
};

export const Example: React.FC<GalleryProps> = ({ images }) => {
	const [[page, direction], setPage] = useState([0, 0]);

	const imageIndex = wrap(0, images.length, page);

	const paginate = (newDirection: number) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<>
			<div className="w-auto h-[100vw] relative flex justify-center align-center">
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						className=" aspect-square m-auto "
						key={page}
						src={images[imageIndex].url}
						alt={images[imageIndex].id}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
							opacity: { duration: 0.1 },
						}}
						drag="x"
						dragConstraints={{ left: 0, right: 0 }}
						dragElastic={1}
						onDragEnd={(e, { offset, velocity }) => {
							const swipe = swipePower(offset.x, velocity.x);

							if (swipe < -swipeConfidenceThreshold) {
								paginate(1);
							} else if (swipe > swipeConfidenceThreshold) {
								paginate(-1);
							}
						}}
					/>
				</AnimatePresence>
				<div className="next" onClick={() => paginate(1)}>
					<MoveRight />
				</div>
				<div className="prev" onClick={() => paginate(-1)}>
					<MoveRight />
				</div>
			</div>
		</>
	);
};
