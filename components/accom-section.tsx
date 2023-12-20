import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
	Accessibility,
	DrumstickIcon,
	FlameKindling,
	GamepadIcon,
	LocateIcon,
	Option,
	User2,
} from 'lucide-react';
const AccomSection = ({}) => {
	return (
		<section className=" w-full py-0 md:py-24 lg:py-32 ">
			<div className="container px-3 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-white">
					Информация за настаняване
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
									Локация
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									Централно градско разположение в спокойна зона, близо до
									исторически забележителности.
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
									Удобства
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									Уютно обзаведени стаи с балкони, които предлагат зашеметяващи
									изгледи.
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
									Място за отдих
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									Камина с дърва, барбекю и градина с места за отдих.
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
									Развлечения
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									Разнообразни дейности: пешеходни преходи, колоездене и
									културни мероприятия.
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
									Домакини
								</h3>
							</CardHeader>
							<CardContent>
								<p className="text-gray-500 dark:text-gray-400 min-h-[100px]">
									Приятелски и внимателен персонал, готов да помогне с всяко
									искане.
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
