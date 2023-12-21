import Link from 'next/link';

import MainNav from './main-nav';
import getCategories from '@/actions/get-categories';

import { Star } from 'lucide-react';

export const revalidate = 0;

const Navbar = async () => {
	const categories = await getCategories();
	return (
		<div className="top-0 w-full flex flex-shrink-0 items-center justify-start">
			<Link href="/">
				<div className="bg-black items-center p-5   sm:p-10  text-white">
					ЗАШЕВА КЪЩА
					<div className="flex justify-center">
						<Star color="yellow" size={20} />
						<Star color="yellow" />
						<Star color="yellow" size={20} />
					</div>
					ГР. БАНСКО
				</div>
			</Link>

			<div className="flex justify-between items-center max-w-7xl min-w-0 min-h-0 mx-5 ">
				<MainNav data={categories} />
			</div>
		</div>
	);
};

export default Navbar;
