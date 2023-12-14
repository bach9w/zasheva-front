'use client';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavbarActions from './navbar-actions';

import SideBar from './navbar-mobile2';

interface MainNavProps {
	data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
	const pathname = usePathname();
	const staticRoutes = [
		{ href: '/', label: 'Начало', active: pathname === '/' },
		{ href: '/about', label: 'За нас', active: pathname === '/about' },
		{ href: '/contacts', label: 'Контакти', active: pathname === '/contacts' },
	];

	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}));

	return (
		<>
			<nav className="hidden sm:flex space-x-4 lg:space-x-6">
				{[...staticRoutes, ...routes].map((route) => (
					<Link
						key={route.href}
						href={route.href}
						className={cn(
							'text-lg font-medium transition-colors hover:text-black hover:bg-orange-500 p-1 rounded-md ',
							route.active ? ' text-white bg-black p-1' : 'text-neutral-500 ',
						)}
					>
						{route.label}
					</Link>
				))}
			</nav>

			<SideBar routes={[...routes, ...staticRoutes]} />
		</>
	);
};

export default MainNav;
