import Link from "next/link";

import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";

import { Star } from "lucide-react";
import LogoNav from "./logo-nav";

const Navbar = async () => {
	const categories = await getCategories();
	return (
		<div className="top-0  bg-black sm:bg-transparent flex justify-start flex-shrink-0 items-center sm:justify-start">
			<Link href="/">
				<LogoNav />
			</Link>

			<div className="flex justify-between items-center max-w-7xl min-w-0 min-h-0 mx-5 ">
				<MainNav data={categories} />
			</div>
		</div>
	);
};

export default Navbar;
