import { CardHeader, CardContent, Card } from '@/components/ui/card';
const AccomSection = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 ">
			<div className="container px-4 md:px-6">
				<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-white">
					Информация за настаняване
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
					<Card>
						<CardHeader>
							<h3 className="text-xl font-bold">Локация</h3>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Идилично разположение в спокойна зона, близо до природни
								забележителности.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<h3 className="text-xl font-bold">Удобства</h3>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Модерно обзаведени стаи с балкони, които предлагат зашеметяващи
								изгледи.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<h3 className="text-xl font-bold">Място за отдих</h3>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Камина с дърва, барбекю и градина с места за отдих.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<h3 className="text-xl font-bold">Развлечения</h3>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Разнообразни дейности: пешеходни преходи, колоездене и културни
								мероприятия.
							</p>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<h3 className="text-xl font-bold">Обслужване</h3>
						</CardHeader>
						<CardContent>
							<p className="text-gray-500 dark:text-gray-400">
								Приятелски и внимателен персонал, готов да помогне с всяко
								искане.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default AccomSection;
