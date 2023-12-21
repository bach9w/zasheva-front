import { Size } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
	const cacheBustingParam = `?_=${new Date().getTime()}`;
	const res = await fetch(`${URL}${cacheBustingParam}`);
	if (!res.ok) {
		throw new Error('Failed');
	}
	return res.json();
};

export default getSizes;
