import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
	Accessibility,
	DrumstickIcon,
	FlameKindling,
	GamepadIcon,
	LocateIcon,
	Option,
	User2,
} from "lucide-react";
const AccomSection = ({
	AcomSectionTitle,
	section1title,
	section1text,
	section2title,
	section2text,
	section3title,
	section3text,
	section4title,
	section4text,
	section5title,
	section5text,
}: {
	AcomSectionTitle: string;
	section1title: string;
	section1text: string;
	section2title: string;
	section2text: string;
	section3title: string;
	section3text: string;
	section4title: string;
	section4text: string;
	section5title: string;
	section5text: string;
}) => {
	return (
		<section className=" w-full py-0 md:py-24 lg:py-32 ">
			<div className="container px-3 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-white">
					{AcomSectionTitle}
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 1,
							},
						}}
						viewport={{ once: true }}
					>
						<Card>
							<CardHeader>
								<h3 className="text-xl font-bold flex">
									<LocateIcon />
									{section1title}
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									{section1text}
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 1,
							},
						}}
						viewport={{ once: true }}
					>
						<Card>
							<CardHeader>
								<h3 className="text-xl font-bold flex">
									<Option />
									{section2title}
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									{section2text}
								</p>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 1,
							},
						}}
						viewport={{ once: true }}
					>
						<Card>
							<CardHeader>
								<h3 className="text-xl font-bold flex">
									<FlameKindling />
									{section3title}
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									{section3text}
								</p>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 1,
							},
						}}
						viewport={{ once: true }}
					>
						<Card>
							<CardHeader>
								<h3 className="text-xl font-bold flex">
									<GamepadIcon />
									{section4title}
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									{section4text}
								</p>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{
							opacity: 1,
							x: 0,
							transition: {
								duration: 1,
							},
						}}
						viewport={{ once: true }}
						className="mb-5"
					>
						<Card>
							<CardHeader>
								<h3 className="text-xl font-bold flex">
									<User2 />
									{section5title}
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									{section5text}
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AccomSection;
