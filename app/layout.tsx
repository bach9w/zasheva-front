import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";

import { ReactNode } from "react";
import Header from "@/components/Header/Header";

const font = Sofia_Sans({ subsets: ["latin"] });
const montserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zasheva - Bansko",
  description: "Zasheva house - Bansko",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserat.className} style={montserat.style}>
        <Header />
        {children}
      </body>
    </html>
  );
}
