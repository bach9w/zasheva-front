"use client";
import React, { useState, useEffect } from "react";
import { Variants, motion } from "framer-motion";

const Example = () => {
	const [showLoader, setShowLoader] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setShowLoader(false), 1500);
		return () => clearTimeout(timer);
	}, []);
	if (!showLoader) return null;

	return (
		<>
			<div className="h-screen z-20 top-0  w-full absolute ">
				<div className="bg-white">
					<div className="absolute z-30 grid place-content-center h-full w-full  px-4 py-24">
						<BarLoader />
					</div>
					<CutoutTextLoader
						height="110vh"
						background="bg-gradient-to-r from-gray-100 to-gray-200"
						imgUrl="/hero.png"
					/>
				</div>
			</div>
		</>
	);
};

const CutoutTextLoader = ({
	height,
	background,
	imgUrl,
}: {
	height: string;
	background: string;
	imgUrl: string;
}) => {
	return (
		<div className="relative" style={{ height }}>
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${imgUrl})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
			/>
			<div
				style={{ background }}
				className="absolute inset-0 animate-pulse z-10"
			/>
		</div>
	);
};
const variants = {
	initial: {
		scaleY: 0.5,
		opacity: 0,
	},
	animate: {
		scaleY: 1,
		opacity: 1,
		transition: {
			repeat: Infinity,
			repeatType: "mirror",
			duration: 1,
			ease: "circIn",
		},
	},
} as Variants;

const BarLoader = () => {
	return (
		<motion.div
			transition={{
				staggerChildren: 0.25,
			}}
			initial="initial"
			animate="animate"
			className="flex gap-1"
		>
			<motion.div variants={variants} className="h-12 w-2 bg-white" />
			<motion.div variants={variants} className="h-12 w-2 bg-white" />
			<motion.div variants={variants} className="h-12 w-2 bg-white" />
			<motion.div variants={variants} className="h-12 w-2 bg-white" />
			<motion.div variants={variants} className="h-12 w-2 bg-white" />
		</motion.div>
	);
};

export default Example;
