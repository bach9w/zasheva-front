"use client";
import { RevealBento } from "@/components/Grid/RevealBento";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/hero-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TiLocationArrowOutline } from "react-icons/ti";

const Page = () => {
	return (
		<>
			<section
				id="start"
				className="min-h-screen flex flex-col items-center justify-center"
				style={{
					backgroundImage: `url("/background.png")`,
					backgroundSize: "cover",
					backgroundPosition: "center",

					height: "100vh",
				}}
			>
				<div className="min-h-screen w-full bg-[#2a1e1d]  px-4 py-12 text-zinc-50">
					<div className="bg-white h-screen w-full justify-center items-center flex bg-opacity-0">
						<HeroSection
							heroSectionButton="гр. Банско"
							heroSectionMain="ЗАШЕВА КЪЩА"
							heroSectionMainText="ГОДИНИ НА ЗАДРУЖНОСТ И УЮТ"
							heroSectionText="ОТКРИЙТЕ УЮТА И ЧИСТОТАТА"
						/>
					</div>
				</div>
			</section>
			<section id="main" className="h-screen">
				<RevealBento />
			</section>
		</>
	);
};

export default Page;

/*
<section
				id="start"
				className="min-h-screen flex flex-col items-center justify-center"
				style={{
					backgroundImage: `url("/background.png")`,
					backgroundSize: "cover",
					backgroundPosition: "center",

					height: "100vh",
				}}
			>
				<div className="min-h-screen w-full bg-[#2a1e1d]  px-4 py-12 text-zinc-50">
					<div className="bg-white h-screen w-full justify-center items-center flex bg-opacity-0">
						<HeroSection
							heroSectionButton="гр. Банско"
							heroSectionMain="ЗАШЕВА КЪЩА"
							heroSectionMainText="ГОДИНИ НА ЗАДРУЖНОСТ И УЮТ"
							heroSectionText="ОТКРИЙТЕ УЮТА И ЧИСТОТАТА"
						/>
					</div>
				</div>
			</section>
 */
