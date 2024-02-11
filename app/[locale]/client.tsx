"use client";
import { motion } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";

import Container from "@/components/ui/container";
import { ArrowDownToDotIcon, Snowflake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/hero-section";
import AccomSection from "@/components/accom-section";

import { useI18n } from "../../locales/client";

export default function Client() {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	const t = useI18n();

	return (
		<>
			{isClient && (
				<motion.div>
					<Container>
						<div className="space-y-10 pb-10">
							<HeroSection
								heroSectionMain={t("heroSectionMain")}
								heroSectionText={t("heroSectionText")}
								heroSectionButton={t("heroSectionButton")}
								heroSectionMainText={t("heroSectionMainText")}
							/>
							<AccomSection
								AcomSectionTitle={t("AcomSectionTitle")}
								section1title={t("section1title")}
								section1text={t("section1text")}
								section2title={t("section2title")}
								section2text={t("section2text")}
								section3title={t("section3title")}
								section3text={t("section3text")}
								section4title={t("section4title")}
								section4text={t("section4text")}
								section5title={t("section5title")}
								section5text={t("section5text")}
							/>
						</div>
					</Container>
				</motion.div>
			)}
		</>
	);
}
