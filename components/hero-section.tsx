import Button from './ui/button';
import Router, { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function HeroSection() {
	const router = useRouter();

	const onClick = () => {
		router.push('/about');
	};
	return (
		<motion.section
			initial={{ opacity: 0, scale: 1, x: -1150 }}
			animate={{ opacity: 1, scale: 1, x: 0 }}
			transition={{ duration: 1 }}
			className="w-full py-20 bg-cover bg-center"
			style={{
				backgroundImage: `linear-gradient(to bottom, #c5c3b6, #c2beb3, #a9a69d),url('/hero.png?height=1080&width=1920')`,
				backgroundBlendMode: 'saturation',
			}}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="container px-4 md:px-6"
			>
				<div className="grif gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
					<div className="flex flex-col justify-end items-end space-y-4 lg:justify-end lg:items-end">
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 1.0 }}
							className="space-y-2 text-center bg-white text-black bg-opacity-50 max-w-[200px] lg:max-w-[600px]"
						>
							<h1 className="text-5xl font-bold tracking-tighter text-black md:text-7xl xl:text-8xl/none">
								Добре дошли
							</h1>
							<p className="text-lg text-black md:text-xl dark:text-gray-400 ">
								Изпитайте магията на зимата като никога досега. Усетете уюта на
								камината, насладете се на нашите стаи или се отдайте на пистите.
							</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 2.0 }}
							className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end"
						>
							<Button
								onClick={onClick}
								className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
							>
								Научете повече за нас
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
}
