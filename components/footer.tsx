'use client';
import { InfoIcon, MailIcon, PhoneCallIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavbarActions from './navbar-actions';
import Link from 'next/link';

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
			className="sticky bottom-0 flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white"
		>
			<nav className="sm:ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-base flex md:text-md hover:underline underline-offset-4"
					href="#"
				>
					<MailIcon size={20} /> : info@zasheva.com
				</Link>

				<Link className="text-base hover:underline underline-offset-4" href="#">
					Contact: +359897962266
				</Link>
			</nav>
			<p className="text-xs sm:text-sm md:text-md lg:text-xl text-gray-500 dark:text-gray-400">
				© Zasheva Kashta. All rights reserved.
			</p>
		</motion.footer>
	);
};
export default Footer;
