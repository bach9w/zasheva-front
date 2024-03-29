import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Sofia_Sans } from "next/font/google";
import "@/app/[locale]/globals.css";
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
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
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
				<ModalProvider locale={locale} />

				{children}
				<Footer />
			</body>
		</html>
	);
}
