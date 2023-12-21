import { Product } from '@/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
	categoryId?: string;
	sizeId?: string;
	isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
	const cacheBustingParam = { _: new Date().getTime().toString() };

	const url = qs.stringifyUrl({
		url: URL,
		query: {
			...query,
			...cacheBustingParam,
		},
	});

	const res = await fetch(url);
	if (!res.ok) {
		throw new Error('Failed');
	}
	return res.json();
};

export default getProducts;
