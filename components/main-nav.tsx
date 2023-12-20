'use client';
import { cn } from '@/lib/utils';
import { Category } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import NavbarActions from './navbar-actions';

import SideBar from './navbar-mobile2';
import Button from './ui/button';

interface MainNavProps {
	data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
	const pathname = usePathname();
	const staticRoutes = [
		{ href: '/bg', label: 'Начало', active: pathname === '/' },
		{ href: '/bg/about', label: 'За нас', active: pathname === '/bg/about' },
	];

	const routes = data.map((route) => ({
		href: `/bg/category/${route.id}`,
		label: route.name,
		active: pathname === `/bg/category/${route.id}`,
	}));
	const nextRoutes = [
		{
			href: '/bg/contacts',
			label: 'Контакти',
			active: pathname === '/bg/contacts',
		},
	];

	return (
		<>
			<nav className="hidden md:flex space-x-4 lg:space-x-6">
				{[...staticRoutes, ...routes, ...nextRoutes].map((route) => (
					<Link key={route.href} href={route.href}>
						<Button
							className={cn(
								'p-5 transition-colors duration-200 ease-in-out bg-white text-black hover:bg-black hover:text-white',
								route.active ? ' text-white bg-black' : 'text-neutral-500 ',
							)}
						>
							{route.label}
						</Button>
					</Link>
				))}
			</nav>

			<SideBar routes={[...staticRoutes, ...routes, ...nextRoutes]} />
		</>
	);
};

export default MainNav;
