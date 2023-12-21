'use client';

import { CalendarPlus } from 'lucide-react';
import Button from '../ui/button';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const NavbarActions = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<div className=" ml-auto md:flex items-center gap-x-4 sm:flex ">
			<Link href="https://www.booking.com/hotel/bg/zashieva-kshcha.html?aid=330843;lang=en;pb=1">
				<Button className="flex items-center rounded-full bg-blue-900 px-4 py-2">
					<CalendarPlus size={15} color="white" />
					<span className="ml-1 sm:ml-2 text-xs sm:text-md font-medium text-white">
						BOOKING.COM
					</span>
				</Button>
			</Link>
		</div>
	);
};

export default NavbarActions;
