"use client";

import { motion } from "framer-motion";
import React, { createContext, useEffect, useState } from "react";

import Container from "@/components/ui/container";
import { ArrowDownToDotIcon, Snowflake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/hero-section";
import AccomSection from "@/components/accom-section";

const RootPage = () => {
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<>
			{isClient && (
				<motion.div>
					<Container>
						<div className="space-y-10 pb-10">
							<HeroSection />
							<AccomSection />
						</div>
					</Container>
				</motion.div>
			)}
		</>
	);
};

export default RootPage;
