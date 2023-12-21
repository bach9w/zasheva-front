import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getCategory(id: string): Promise<Category> {
	const res = await fetch(`${URL}/${id}`);
	if (!res.ok) {
		throw new Error('Failed');
	}
	return res.json();
}

export default getCategory;
