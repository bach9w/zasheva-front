'use client';

import { motion } from 'framer-motion';
import React, { createContext } from 'react';

import Container from '@/components/ui/container';
import { ArrowDownToDotIcon, Snowflake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 0;

const RootPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Container>
				<div className="space-y-10 pb-10">
					<Image
						src="/hero.png"
						alt="Zasheva house - Bansko"
						width={1920}
						height={1080}
						className="rounded-b-xl shadow-lg"
					/>
				</div>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 content-start lg:hidden"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<motion.div
						className="snow bg-white h-20 flex w-full text-center object-center justify-center items-center md:rounded-r-xl"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<Snowflake />
						Снежна покривка в Банско - 0 см
					</motion.div>
					<motion.div
						className="snow bg-white h-20 flex w-full text-center object-center justify-center items-center md:rounded-l-xl hover:bg-orange-500 hover:text-white"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<ArrowDownToDotIcon />
						<Link href="/about">Запазете вашата мечтана почивка</Link>
					</motion.div>
				</motion.div>
			</Container>
		</motion.div>
	);
};

export default RootPage;
