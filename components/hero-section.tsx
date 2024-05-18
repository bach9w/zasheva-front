import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HeroSection({
	heroSectionMain,
	heroSectionText,
	heroSectionButton,
	heroSectionMainText,
}: {
	heroSectionMain: string;
	heroSectionText: string;
	heroSectionButton: string;
	heroSectionMainText: string;
}) {
	const router = useRouter();
	const text = heroSectionMainText.split(" ");

	const onClick = () => {
		router.push("/about");
	};
	return (
		<>
			<motion.section
				initial={{ opacity: 0, scale: 1, x: -1150 }}
				animate={{ opacity: 1, scale: 1, x: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="w-full min-h-[600px] p-5 py-0 sm:py-12 md:py-24 lg:py-32 xl:py-48  bg-[-400px]"
				style={{
					backgroundImage: `linear-gradient(to bottom, #c5c3b6, #c2beb3, #a9a69d),url('/hero.png?height=1080&width=1920')`,
					backgroundBlendMode: "multiply",
					backgroundPosition: "cover",
				}}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="container px-4 md:px-6"
				>
					<div className="grid gap-12">
						<div className="flex flex-col justify-end items-end space-y-4 ">
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 1.0 }}
								className="space-y-2 text-center bg-white text-black bg-opacity-80 min-h-full lg:max-w-[600px]"
							>
								<h1 className="text-[70px] font-bold h-full flex justify-center items-center tracking-tighter text-black md:text-7xl xl:text-8xl/none">
									{heroSectionMain}
								</h1>
								<p className="text-lg hidden sm:visible text-black md:text-xl dark:text-gray-400 ">
									{heroSectionText}
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, delay: 2.0 }}
								className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end"
							>
								<Button
									onClick={onClick}
									className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
								>
									{heroSectionButton}
								</Button>
							</motion.div>
						</div>
					</div>
				</motion.div>
			</motion.section>
		</>
	);
}
