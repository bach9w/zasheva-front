import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

import { ReactNode } from "react";
import Header from "@/components/Header/Header";
import ConvexClientProvider from "../providers/ConvexClientProvider";

const font = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Zasheva - Bansko",
	description: "Zasheva house - Bansko",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ConvexClientProvider>
					<Header />
					{children}
				</ConvexClientProvider>
			</body>
		</html>
	);
}
