'use client';

import { motion } from 'framer-motion';
import React, { createContext } from 'react';

import Container from '@/components/ui/container';
import { ArrowDownToDotIcon, Snowflake } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/hero-section';
import AccomSection from '@/components/accom-section';

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
					<HeroSection />
				</div>
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 content-start "
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				>
					<AccomSection />
				</motion.div>
			</Container>
		</motion.div>
	);
};

export default RootPage;
