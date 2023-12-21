import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Button from '../ui/button';
import { Plus, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import IconButton from '../ui/icon-button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MobileNavProps {
	routes: {
		href: string;
		label: string;
		active: boolean;
	}[];
}

const SideBar: React.FC<MobileNavProps> = ({ routes }) => {
	const [open, setOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	const onOpen = () => setOpen(true);
	const onClose = () => setOpen(false);
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					onClick={onOpen}
					className=" absolute top-7 h-10 sm:top-10 right-0 flex items-center gap-x-1 md:hidden"
				>
					МЕНЮ
					<Plus size={10} />
				</Button>
			</SheetTrigger>
			<SheetContent side={'bottom'}>
				<SheetHeader>
					<SheetTitle>МЕНЮ</SheetTitle>
					<SheetDescription>
						<div>
							{[...routes].map((route) => (
								<Link key={route.href} href={route.href}>
									<div
										key={route.href}
										className={cn(
											'text-center items-center mt-2',
											route.active
												? 'bg-orange-500 text-white'
												: 'bg-black text-white',
											'hover:bg-orange-500',
										)}
									>
										<SheetClose>{route.label}</SheetClose>
									</div>
								</Link>
							))}
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default SideBar;
