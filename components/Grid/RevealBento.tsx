import React, { useState } from "react";
import { isSameDay, set } from "date-fns";
import { DateRange, DayMouseEventHandler, DayPicker } from "react-day-picker";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowLeft, FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import {
	SiFacebook,
	SiGithub,
	SiInstagram,
	SiTiktok,
	SiTwitter,
	SiYoutube,
} from "react-icons/si";
import { LocateIcon, SearchCheckIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import "react-day-picker/src/style.css";
import Image from "next/image";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";

export const RevealBento = () => {
	return (
		<div className="min-h-screen  px-4 py-12 text-zinc-50">
			<motion.div
				initial="initial"
				animate="animate"
				viewport={{ once: true }}
				transition={{
					staggerChildren: 0.05,
				}}
				className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
			>
				<HeaderBlock />
				<SocialsBlock />
				<AboutBlock />
				<LocationBlock />
				<EmailListBlock />
			</motion.div>
		</div>
	);
};

type BlockProps = {
	className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
	return (
		<motion.div
			variants={{
				initial: {
					scale: 0.5,
					y: 50,
					opacity: 0,
				},
				animate: {
					scale: 1,
					y: 0,
					opacity: 1,
				},
			}}
			transition={{
				type: "spring",
				mass: 3,
				stiffness: 400,
				damping: 50,
			}}
			className={twMerge(
				"col-span-4 rounded-lg border-none bg-white p-6",
				className,
			)}
			{...rest}
		/>
	);
};

const HeaderBlock = () => (
	<Block className="col-span-12 row-span-2 md:col-span-6">
		<Image
			width={500}
			height={500}
			src="/map.jpg"
			alt="avatar"
			className="mb-4 size-14 rounded-full"
		/>
		<h1 className="mb-12 text-4xl font-medium leading-tight">
			<span className=" text-zinc-400">Добре дошли.</span>
			<span className="text-white text-[20px]"> by ZASHEVA</span>
		</h1>
		<a
			href="#"
			className="flex items-center justify-between gap-1 text-red-300 hover:underline"
		>
			<b className="flex items-center">
				<LocateIcon />
				APPLE
				<FiArrowRight />
			</b>
			<b className="flex items-center text-[10px] text-center justify-center">
				41.83935265198173, 23.489226596416508
			</b>
			<b className="flex items-center">
				<FiArrowLeft />
				GOOGLE
				<LocateIcon />
			</b>
		</a>
	</Block>
);

const SocialsBlock = () => (
	<>
		<Block
			whileHover={{
				rotate: "-2.5deg",
				scale: 1.1,
			}}
			className="col-span-6 bg-zinc-50 md:col-span-3"
		>
			<a
				href="#"
				className="grid h-full place-content-center text-3xl text-black"
			>
				SAPID
				<span className="text-[8px]">COCKTAILS & FOOD</span>
			</a>
		</Block>
		<Block
			whileHover={{
				rotate: "2.5deg",
				scale: 1.1,
			}}
			className="col-span-6 bg-blue-500 md:col-span-3"
		>
			<a
				href="#"
				className="grid h-full place-content-center text-3xl text-white uppercase"
			>
				Booking
			</a>
		</Block>
		<Block
			whileHover={{
				rotate: "-2.5deg",
				scale: 1.1,
			}}
			className="col-span-6 bg-orange-600 md:col-span-3"
		>
			<a
				href="#"
				className="grid h-full place-content-center text-3xl text-white"
			>
				<SiInstagram />
			</a>
		</Block>

		<Block
			whileHover={{
				rotate: "2.5deg",
				scale: 1.1,
			}}
			className="col-span-6 bg-blue-500 md:col-span-3"
		>
			<a
				href="#"
				className="grid h-full place-content-center text-3xl text-white"
			>
				<SiFacebook />
			</a>
		</Block>
	</>
);

const AboutBlock = () => (
	<Block className="col-span-12 text-xl text-black">
		<p>
			Зашева къща{" "}
			<span className="text-zinc-600">
				е чудесен вариант за ценителите на спокойствието, домашния уют и
				индивидуалния подход към изискванията на клиентите. Намираме се само на
				метри от централният площад на град Банско, който открива врати за
				всички Вас, както за културни прояви и забележителности така и за
				незабравими нощи. Разполагаме с шест двойни стаи и едно студио. Всички
				стаи са оборудвани с най-необходимите неща за една перфектна почивка. На
				разположение на нашите гости има още лоби бар, място за хранене и отдих
				с просторна градина, 24 часова рецепция и паркинг. По желание може да
				бъде предложена закуска.
			</span>
		</p>
	</Block>
);

const LocationBlock = () => (
	<Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
		<div className="bg-red-800 w-full text-[20px] flex items-center justify-center">
			LOCATION <FiMapPin />
		</div>
		<p className="text-center text-lg text-zinc-800">BANSKO, BULGARIA</p>
		<p className="text-center text-lg text-zinc-800">3 TOMA VISHANOV STR.</p>
	</Block>
);

function CustomMultiple() {
	const [value, setValue] = useState<Date[]>([]);
	const initiallySelectedDate = new Date();
	const [selectedDate, setSelectedDate] = useState<DateRange | any>(
		initiallySelectedDate,
	);
	const handleDayClick: DayMouseEventHandler = (day, modifiers) => {
		const newValue = [...value];
		if (modifiers.selected) {
			const index = value.findIndex((d) => isSameDay(day, d));
			newValue.splice(index, 1);
		} else {
			newValue.push(day);
		}
		setValue(newValue);
		setSelectedDate({ from: newValue[0], to: newValue[newValue.length - 1] });
	};

	const handleResetClick = () => setValue([]);

	let footer = <>Изберете ден за да започнете</>;

	if (value.length > 0)
		footer = (
			<>
				<div className="flex flex-col w-full justify-center items-center bg-red-800 text-white">
					{value.length === 1 ? (
						<>
							Избрали сте {value.length} ден.{" "}
							<button onClick={handleResetClick}>Рестарт</button>
						</>
					) : (
						<>
							Избрали сте {value.length} дни.{" "}
							<button onClick={handleResetClick}>Рестарт</button>
						</>
					)}
				</div>
			</>
		);

	return (
		<Calendar
			selected={selectedDate}
			className="w-full flex justify-center gap-2 text-black  px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
			onDayClick={handleDayClick}
			modifiersStyles={{
				selected: {
					color: "white",
					backgroundColor: "#679dee",
					borderRadius: 25,
				},
			}}
			styles={{}}
			modifiers={{ selected: value, disabled: { before: new Date() } }}
			footer={footer}
		/>
	);
}

const FormSchema = z.object({
	mobile: z.boolean().default(false).optional(),
	numberOfGuests: z.number().optional(),
	numberOfKids: z.number().optional(),
});

const EmailListBlock = () => {
	const [childrenIn, setChildrenIn] = useState<boolean>(false);
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			mobile: true,
			numberOfGuests: 0,
			numberOfKids: 0,
		},
	});
	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}
	return (
		<Block className="col-span-12 md:col-span-9">
			<Badge className="w-[200px] h-[20px] bg-red-800 mb-5">Резервация</Badge>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<CustomMultiple />
					<FormField
						control={form.control}
						name="numberOfGuests"
						render={({ field }) => (
							<FormItem className="flex flex-col items-center justify-center bg-red-800 text-white gap-6 space-x-3 space-y-0 rounded-md border p-4">
								<FormLabel>Брой гости?</FormLabel>
								<FormDescription>
									<FormControl>
										<Input type="number" {...field} />
									</FormControl>
								</FormDescription>
								<div className="space-y-1 leading-none">
									<FormDescription>Отбележете брой гости</FormDescription>
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="mobile"
						render={({ field }) => (
							<FormItem className="flex flex-row bg-red-800 text-white items-start space-x-3 space-y-0 rounded-md border p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>Деца?</FormLabel>
									<FormDescription>
										Отбележете при резервация с деца.
									</FormDescription>
								</div>
								{field.value && (
									<FormField
										control={form.control}
										name="numberOfKids"
										render={({ field }) => (
											<FormItem className="flex flex-col items-center justify-center bg-red-800 text-white gap-6 space-x-3 space-y-0 rounded-md border p-4">
												<FormDescription>
													<FormControl>
														<Input type="number" {...field} />
													</FormControl>
												</FormDescription>
												<div className="space-y-1 leading-none">
													<FormDescription>
														Отбележете брой деца
													</FormDescription>
												</div>
											</FormItem>
										)}
									/>
								)}
							</FormItem>
						)}
					/>

					<Button
						className="bg-red-800 flex items-center justify-center hover:bg-black hover:text-red-800"
						type="submit"
					>
						Провери наличност <SearchCheckIcon />
					</Button>
				</form>
			</Form>
		</Block>
	);
};

const Logo = () => {
	// Temp logo from https://logoipsum.com/
	return (
		<svg
			width="40"
			height="auto"
			viewBox="0 0 50 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="mx-auto mb-12 fill-zinc-50"
		>
			<path
				d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
				stopColor="#000000"
			></path>
			<path
				d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
				stopColor="#000000"
			></path>
		</svg>
	);
};
