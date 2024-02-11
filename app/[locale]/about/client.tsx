"use client";

import Container from "@/components/ui/container";
import { motion } from "framer-motion";
import ShuffleHero from "@/app/[locale]/about/components/shuffle-hero";
import { useI18n } from "@/locales/client";

import Image from "next/image";
import Example from "@/components/loader/CutOutTextLoader";

const AboutPage = () => {
	const t = useI18n();
	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<Container>
					<div className="text-center bg-white  justify-center object-center w-full">
						<div className="bg-black text-white mb-1">
							<h1>{t("aboutMainTitle")}</h1>
						</div>
						<div className=" flex w-full text-center justify-center items-center object-center mt-3">
							<h1 className="text-black text-sm w-1/2 object-center uppercase">
								{t("aboutTextTitle")}
							</h1>
						</div>
						<div className="object-center w-full items-center font-light justify-center flex">
							<p className="p-7 text-black">{t("aboutText")}</p>
						</div>
						<div className=" w-full flex text-white mt-2 text-sm md:text-xl grid-col-1 text-center object-center justify-center">
							<div className="flex bg-blue-500 text-white items-center text-center justify-center rounded-full w-10 h-10 ">
								8.7
							</div>
						</div>
						<div className="text-center bg-blue-500 mt-2">
							Booking.com - Guest Review 2023
						</div>
					</div>
					<ShuffleHero
						aboutRed={t("aboutRed")}
						aboutTravel={t("aboutTravel")}
						aboutTravelText={t("aboutTravelText")}
						aboutTravelButton={t("aboutTravelButton")}
					/>
				</Container>
			</motion.div>
		</>
	);
};

export default AboutPage;

/*
<div className="static text-center justify-center object-center w-full">
					<div className="bg-black text-white mb-1">
						<h1 className="absolute bg-black h-10 w-full">
							Уюта и спокойствието на частния дом, съчетана с лукса на четирите
							звезди!
						</h1>
					</div>
					<div className="object-center w-full justify-center flex">
						<p className="p-7">
							Зашева къща е чудесен вариант за ценителите на спокойствието,
							домашния уют и индивидуалния подход към изискванията на клиентите.
							Намираме се само на метри от централният площад на град Банско,
							който открива врати за всички Вас, както за културни прояви и
							забележителности така и за незабравими нощи. Разполагаме със седем
							двойни стаи и две студия. Всички стаи са оборудвани с
							най-необходимите неща за една перфектна почивка. На разположение
							на нашите гости има още лоби бар, място за хранене и отдих с
							просторна градина, 24 часова рецепция и паркинг. По желание може
							да бъде предложена закуска.
						</p>
					</div>

					<div className="flex object-center justify-center items-center  w-auto h-auto text-center content-center">
						<div className="flex bg-blue-500 text-white items-center text-center justify-center rounded-full w-10 h-10 ">
							8.7
						</div>
					</div>
					<div className="text-center bg-blue-500 mt-2">
						Booking.com - Guest Review 2023
					</div>
				</div>
				*/
