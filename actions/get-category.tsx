import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getCategory(id: string): Promise<Category> {
	const cacheBustingParam = `?_=${new Date().getTime()}`;
	const res = await fetch(`${URL}/${id}${cacheBustingParam}`);
	if (!res.ok) {
		throw new Error('Failed');
	}
	return res.json();
}

export default getCategory;
