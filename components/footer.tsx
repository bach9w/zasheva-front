'use client';
import { InfoIcon, PhoneCallIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavbarActions from './navbar-actions';

const Footer = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 0) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.footer
			variants={{
				visible: { y: 0 },
				hidden: { y: '100%' },
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.5, ease: 'easeInOut' }}
			className="fixed w-full  bottom-0 bg-gray-50"
		>
			<div className="text-sm md:text-xl mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
				<div className="flex sm:items-start justify-start">
					<div className=" flex justify-center mb-2">
						<InfoIcon className="h-5 w-5 md:h-10 md:w-10" /> info@zasheva.com
					</div>
				</div>
				<div className="absolute right-3 bottom-2 sm:bottom-2 md:bottom-4">
					<NavbarActions />
				</div>
			</div>
		</motion.footer>
	);
};
export default Footer;
