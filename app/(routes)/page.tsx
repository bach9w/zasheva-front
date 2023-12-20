'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Flag } from 'lucide-react';
import Button from '@/components/ui/button';

const Page = () => {
	const [isMounted, setIsMounted] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setIsMounted(true);

		// Redirect to the Bulgarian page
	}, [isMounted]);

	if (!isMounted) {
		return null;
	}

	const onButtonClick = () => {
		router.push('/bg');
	};

	// Optional: Render a loading state or a blank page
	return (
		<div>
			<div className="bg-white w-full h-20 text-center text-4xl">
				Добре дошли
			</div>
			<div className="h-[100vh] bg-white flex items-start">
				<div className="relative bg-red-500 h-1/2 w-1/2 items-center group flex hover:bg-white justify-start">
					<Flag size={300} />
					<div className="absolute bottom-0 left-[20%] text-2xl text-white group-hover:text-red-500">
						<Button onClick={onButtonClick}>BULGARIAN</Button>
					</div>
				</div>

				<div className="relative bg-blue-500 h-1/2 w-1/2 items-center group flex hover:bg-white justify-start">
					<Flag size={300} />
					<div className="absolute bottom-0 left-[30%] text-2xl text-white group-hover:text-blue-500">
						<Button>ENGLISH</Button>
					</div>
				</div>
				<div className="bg-indigo-500 w-full text-center  absolute bottom-[1%] sm:bottom-[28%] text-white">
					Моля изберете език / Please select a language
				</div>
			</div>
		</div>
	);
};

export default Page;
