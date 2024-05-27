"use client";
import { RevealBento } from "@/components/Grid/RevealBento";
import styles from "./styles/section1.module.scss";

import HeroSection from "@/components/hero-section";
import Images from "@/components/Image";

import ParalaxHero from "@/components/Paralax-background/paralax";

const Page = () => {
  return (
    <>
      <ParalaxHero />

      <Images />
      <section id="main" className={styles.main}>
        <div id="box" className={styles.box}>
          <RevealBento />
        </div>
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

			//


				<section id="start" className={styles.start}>
				<div className="min-h-screen w-full bg-gradient-to-r from-[#6d6027] to-[#D3CBB8]  px-4 py-12 text-zinc-50">
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
			<Images />
			<section id="main" className={styles.main}>
				<RevealBento />
			</section>
 */
