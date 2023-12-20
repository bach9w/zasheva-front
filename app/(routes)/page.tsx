'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Construction, Flag } from 'lucide-react';
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

	const onButtonClickBG = () => {
		router.push('/bg');
	};
	const onButtonClickEN = () => {
		router.push('/en');
	};

	// Optional: Render a loading state or a blank page
	return (
		<div>
			<div className="bg-white w-full h-20 text-center text-4xl">
				Добре дошли
			</div>
			<div className="bg-indigo-500 w-full text-center   sm:bottom-[28%] text-white">
				Моля изберете език / Please select a language
			</div>
			<div className="h-screen   shadow-md rounded-lg overflow-hidden  flex items-start">
				<div className="relative  h-1/2 w-1/2 justify-center items-center group flex">
					<Button className="h-20" onClick={onButtonClickBG}>
						BULGARIAN
					</Button>
				</div>

				<div className="relative  h-1/2 w-1/2 justify-center items-center group flex ">
					<Button className="h-20 flex items-center">
						ENGLISH - <Construction />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Page;
