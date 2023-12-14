import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';

const font = Urbanist({ subsets: ['latin'] });

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
					backgroundImage:
						'linear-gradient(to right, #c5c3b6, #c2beb3, #a9a69d)',
					height: '100%',
				}}
			>
				<Navbar />
				<ModalProvider />

				{children}
				<Footer />
			</body>
		</html>
	);
}
