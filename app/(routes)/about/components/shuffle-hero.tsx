import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ShuffleHero = () => {
	return (
		<section className="bg-white w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
			<div>
				<span className="flex justify-end mb-4 text-xs md:text-sm text-red-500 font-medium">
					Предложенияа
				</span>
				<h3 className="text-4xl md:text-6xl font-semibold">
					Огазиране на почивка
				</h3>
				<p className="text-base md:text-lg text-slate-700 my-0 md:my-6">
					Доверие за една незабравима почивка.
				</p>
				<button className="bg-gray-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
					Запази стая
				</button>
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
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 2,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 3,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 4,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 5,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 6,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 7,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 8,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 9,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 10,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 11,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 12,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/yqarkvhajbpj3krhk6mz.jpg',
	},
	{
		id: 13,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/mfxvvqstzag4gc00fzkk.jpg',
	},
	{
		id: 14,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/cju0cxs0ozeh3kouzwpr.jpg',
	},
	{
		id: 15,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/s4y63i2v7jickdswvslt.jpg',
	},
	{
		id: 16,
		src: 'https://res.cloudinary.com/dvxdywmd6/image/upload/c_crop,g_auto,h_800,w_800/hoctqqhy2bmantt2fc3f.jpg',
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

		timeoutRef.current = setTimeout(shuffleSquares, 3000);
	};

	return (
		<div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
			{squares.map((sq) => sq)}
		</div>
	);
};

export default ShuffleHero;
