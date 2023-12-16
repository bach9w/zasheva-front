'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.NumberFormat('bg-BG', {
	style: 'currency',
	currency: 'BGN',
});

interface CurrencyProps {
	value: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className="font-semibold bg-black text-white w-32 text-center">
			{formatter.format(Number(value))}
		</div>
	);
};

export default Currency;
