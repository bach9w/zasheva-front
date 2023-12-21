'use client';
import useScroll from '@/lib/hooks/use-scroll';
import LogoNav from './logo-nav';
import { motion } from 'framer-motion';

const ScrolledNav = () => {
	const scrolled = useScroll(100);
	return (
		<motion.div
			initial={{ opacity: 0, y: -100 }}
			whileInView={{
				opacity: 1,

				y: 0,
				transition: { delay: -0.6, duration: 0.6, ease: 'easeInOut' },
			}}
			className={`fixed top-0 w-full flex justify-center ${
				scrolled
					? 'border-b h-[100px] border-gray-900 bg-black backdrop-blur-xl'
					: 'hidden'
			} z-30 transition-all`}
		>
			<LogoNav />
		</motion.div>
	);
};

export default ScrolledNav;
