import Link from 'next/link';

import MainNav from './main-nav';
import getCategories from '@/actions/get-categories';

import { Star } from 'lucide-react';

export const revalidate = 0;

const Navbar1 = async () => {
	const categories = await getCategories();
	return (
		<div className="top-0 w-full flex flex-shrink-0 items-center justify-center">
			<Link href="/">
				<div className="bg-black items-center p-5   sm:p-10  text-white">
					ЗАШЕВА КЪЩА
					<div className="flex justify-center">
						<Star color="yellow" size={20} />
						<Star color="yellow" />
						<Star color="yellow" size={20} />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Navbar1;
