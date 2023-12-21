import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const ShuffleHero = () => {
	return (
		<section className="bg-white w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
			<div>
				<span className="flex justify-end mb-4 text-xs md:text-sm text-red-500 font-medium">
					Предложенияа
				</span>
				<h3 className="text-4xl md:text-6xl font-semibold">
					Организирай почивката си сега!
				</h3>
				<p className="text-base md:text-lg text-slate-700 my-0 md:my-6">
					Доверие за една незабравима почивка.
				</p>
				<Link href="./category/0d1f31d9-db97-445b-b3c2-795b9a14ad25">
					<button className="bg-gray-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
						Запази стая
					</button>
				</Link>
			</div>
			<ShuffleGrid />
		</section>
	);
};

const shuffle = (array: (typeof squareData)[0][]) => {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
};

const squareData = [
	{
		id: 1,
		src: 'https://www.itsalltriptome.com/wp-content/webpc-passthru.php?src=https://www.itsalltriptome.com/wp-content/uploads/Bansko.jpg&nocache=1',
	},
	{
		id: 2,
		src: 'https://travelen.eu/wp-content/uploads/2018/01/Front-Image-Destination-Bansko-Travelen.jpg',
	},
	{
		id: 3,
		src: 'https://www.ontheluce.com/wp-content/uploads/2017/03/Bansko-on-off-slopes.jpg',
	},
	{
		id: 4,
		src: 'https://static.wixstatic.com/media/ed6ebd_5b1e1adff6124239ac3d9d96d3506c11~mv2.jpg/v1/fill/w_640,h_426,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ed6ebd_5b1e1adff6124239ac3d9d96d3506c11~mv2.jpg',
	},
	{
		id: 5,
		src: 'https://as2.ftcdn.net/v2/jpg/00/95/29/99/1000_F_95299941_wr2tuNtyYTp7AXXeeVjQcv3hc8m3b8PO.jpg',
	},
	{
		id: 6,
		src: 'https://as2.ftcdn.net/v2/jpg/03/92/06/03/1000_F_392060310_aP9xbqB58ImwK4nBapH4FieY6dqTvG8M.jpg',
	},
	{
		id: 7,
		src: 'https://as1.ftcdn.net/v2/jpg/02/20/28/28/1000_F_220282876_8n07WXEyzNbupshGpyXGetzKvWBc2m71.jpg',
	},
	{
		id: 8,
		src: 'https://as2.ftcdn.net/v2/jpg/05/72/00/05/1000_F_572000571_XHEwF1VZ0E2sdxF45HhHtd3pa6BKY24W.jpg',
	},
	{
		id: 9,
		src: 'https://as2.ftcdn.net/v2/jpg/04/30/10/07/1000_F_430100723_1CerTx0V9jERS9HPgiV6DQRdSiK2gCcX.jpg',
	},
	{
		id: 10,
		src: 'https://as2.ftcdn.net/v2/jpg/05/35/06/39/1000_F_535063930_hQZqvi38y03DHZUfvSQWR0nYGmwAaIjc.jpg',
	},
	{
		id: 11,
		src: 'https://as2.ftcdn.net/v2/jpg/06/77/56/43/1000_F_677564375_tcnEKb8o8AYNwgHKIg6BQthW8PcHL2Jd.jpg',
	},
	{
		id: 12,
		src: 'https://as1.ftcdn.net/v2/jpg/01/80/84/32/1000_F_180843236_lDnATD2KOphbWAW8OQyTUMp6QNRiOY3z.jpg',
	},
	{
		id: 13,
		src: 'https://as1.ftcdn.net/v2/jpg/05/39/82/12/1000_F_539821201_gSmv9MNRjzzumWiZUQMvqlmuET3XkXnn.jpg',
	},
];

const generateSquares = () => {
	return shuffle(squareData).map((sq) => (
		<motion.div
			key={sq.id}
			layout
			transition={{ duration: 1.5, type: 'spring' }}
			className="w-full h-full"
			style={{
				backgroundImage: `url(${sq.src})`,
				backgroundSize: 'cover',
			}}
		></motion.div>
	));
};

const ShuffleGrid = () => {
	const timeoutRef = useRef<any>(null);
	const [squares, setSquares] = useState(generateSquares());

	useEffect(() => {
		shuffleSquares();

		return () => clearTimeout(timeoutRef.current);
	}, []);

	const shuffleSquares = () => {
		setSquares(generateSquares());

		timeoutRef.current = setTimeout(shuffleSquares, 5000);
	};

	return (
		<div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1">
			{squares.map((sq) => sq)}
		</div>
	);
};

export default ShuffleHero;
