"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScroll from "@/lib/hooks/use-scroll";

import SideBar from "./navbar-mobile2";
import Button from "../ui/button";

interface MainNavProps {
	data: Category[];
}

const MainNav: React.FC<{ data: string[]; locale: string }> = ({
	locale,
	data,
}) => {
	const pathname = usePathname();
	const scrolled = useScroll(50);

	const staticRoutes = [
		{ href: "/", label: "Начало", active: pathname === "/" },
		{ href: "/about", label: "За нас", active: pathname === "/about" },
	];
	const staticRoutesEn = [
		{ href: "/en", label: "Home", active: pathname === "/en" },
		{ href: "/en/about", label: "About", active: pathname === "/en/about" },
	];

	const routes = data.map((route) => ({
		href: `/category/${route.id}`,
		label: route.name,
		active: pathname === `/category/${route.id}`,
	}));
	const routesEn = data.map((route) => ({
		href: `/en/category/${route.id}`,
		label: "Rooms",
		active: pathname === `/en/category/${route.id}`,
	}));
	const nextRoutes = [
		{
			href: "/contacts",
			label: "Контакти",
			active: pathname === "/contacts",
		},
	];
	const nextRoutesEn = [
		{
			href: "/en/contacts",
			label: "Contacts",
			active: pathname === "/en/contacts",
		},
	];

	return (
		<>
			{locale === "bg" ? (
				<nav className={`hidden md:flex  space-x-4 lg:space-x-6 `}>
					{[...staticRoutes, ...routes, ...nextRoutes].map((route) => (
						<Link key={route.href} href={route.href}>
							<Button
								className={cn(
									"p-5 transition-colors duration-200 ease-in-out bg-white text-black hover:bg-black hover:text-white",
									route.active ? " text-white bg-black" : "text-neutral-500 ",
								)}
							>
								{route.label}
							</Button>
						</Link>
					))}
				</nav>
			) : (
				<nav className={`hidden md:flex  space-x-4 lg:space-x-6 `}>
					{[...staticRoutesEn, ...routesEn, ...nextRoutesEn].map((route) => (
						<Link key={route.href} href={route.href}>
							<Button
								className={cn(
									"p-5 transition-colors duration-200 ease-in-out bg-white text-black hover:bg-black hover:text-white",
									route.active ? " text-white bg-black" : "text-neutral-500 ",
								)}
							>
								{route.label}
							</Button>
						</Link>
					))}
				</nav>
			)}

			{/* Mobile */}
			{locale === "bg" ? (
				<SideBar
					text="Меню"
					routes={[...staticRoutes, ...routes, ...nextRoutes]}
				/>
			) : (
				<SideBar
					text="Menu"
					routes={[...staticRoutesEn, ...routesEn, ...nextRoutesEn]}
				/>
			)}
		</>
	);
};

export default MainNav;
