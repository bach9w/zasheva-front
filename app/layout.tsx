import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { Sofia_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const font = Sofia_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Zasheva - Bansko',
	description: 'Zasheva house - Bansko',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={font.className + ' min-h-screen flex flex-col'}
				style={{
					backgroundImage: `url("/background.png")`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: '100%',
				}}
			>
				<Analytics />
				<SpeedInsights />
				<Navbar />
				<ModalProvider />

				{children}
				<Footer />
			</body>
		</html>
	);
}
