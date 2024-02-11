"use client";

import Container from "@/components/ui/container";
import { motion } from "framer-motion";
import MyGoogleMap from "@/components/googleMaps/map";

import { useI18n } from "@/locales/client";

const ContactPage = () => {
	const t = useI18n();
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<Container>
				<div className="text-center  justify-center object-center w-full">
					<div className="bg-black text-white mb-1">
						<h1>{t("contactMainTitle")}</h1>
					</div>
					<div className="object-center w-full mt-2 justify-center flex">
						<MyGoogleMap />
					</div>
					<div className="bg-black text-white mt-2 text-sm md:text-xl grid-col-1 text-center object-center justify-center">
						<div className="flex flex-col justify-center mb-2">
							{t("contactTown")}
							<br /> {t("contactAddress")}
							<br />
							+359 897971010
							<br />
							+359 897962266
						</div>
					</div>
				</div>
			</Container>
		</motion.div>
	);
};

export default ContactPage;
