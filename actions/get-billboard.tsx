import { Billboard } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
	const cacheBustingParam = `?_=${new Date().getTime()}`;
	const res = await fetch(`${URL}/${id}${cacheBustingParam}`);
	if (!res.ok) {
		throw new Error('Failed');
	}
	return res.json();
};

export default getBillboard;
