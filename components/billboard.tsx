"use client";
import { getCurrentLocale } from "@/locales/server";
import { Billboard as BillboardType } from "@/types";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface BillboardProps {
	data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<motion.div
			initial={{ opacity: 1, y: -300 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1.5 }}
			className="p-0 sm:p-0 lg:p-0 rounded-xl  overflow-hidden shadow-sm"
		>
			<div className="text-2md md:text-xl font-bold text-orange-500 text-center uppercase rounded-lg hover:shadow-blue-500">
				<div
					className="rounded-xl relative hover:shadow-lg  aspect-[3.2/1] overflow-hidden bg-center bg-cover"
					style={{ backgroundImage: `url(${data?.imageUrl})` }}
				></div>
				<div className="p-1 bg-opacity-80 bg-orange-500 text-white h-[60px]">
					ZASHEVA - BANSKO
				</div>
			</div>
		</motion.div>
	);
};

export default Billboard;
