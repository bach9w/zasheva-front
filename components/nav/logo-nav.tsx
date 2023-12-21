'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Star } from 'lucide-react';

const LogoNav = () => {
	return (
		<motion.div
			className="bg-black text-center overflow-hidden items-center
      p-5 sm:p-10 text-white flex justify-center"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
		>
			<div>
				ЗАШЕВА КЪЩА
				<div className="flex justify-center">
					<Star color="yellow" size={20} />
					<Star color="yellow" />
					<Star color="yellow" size={20} />
				</div>
				БАНСКО
			</div>
		</motion.div>
	);
};

export default LogoNav;
