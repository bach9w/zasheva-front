import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Sofia_Sans } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer";
import { setStaticParamsLocale } from "next-international/server";

import ModalProvider from "@/providers/modal-provider";
import { getCurrentLocale, getStaticParams } from "@/locales/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/nav";

const font = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Zasheva - Bansko",
	description: "Zasheva house - Bansko",
};

export function generateStaticParams() {
	return getStaticParams();
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentLocale = getCurrentLocale();
	setStaticParamsLocale(currentLocale);
	return (
		<html>
			<body
				className={font.className + " min-h-screen flex flex-col"}
				style={{
					backgroundImage: `url("/background.png")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "100%",
				}}
			>
				<Analytics />
				<SpeedInsights />
				<Nav />
				<ModalProvider locale={currentLocale} />

				{children}
				<Footer />
			</body>
		</html>
	);
}
