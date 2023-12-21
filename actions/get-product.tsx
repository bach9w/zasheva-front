import { Product } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
	const cacheBustingParam = `?_=${new Date().getTime()}`;
	const res = await fetch(`${URL}/${id}${cacheBustingParam}`);
	if (!res.ok) {
		throw new Error('Failed');
	}
	return res.json();
};

export default getProduct;
