import { setStaticParamsLocale } from "next-international/server";
import { getI18n, getStaticParams, getCurrentLocale } from "@/locales/server";
import Client from "./client";
import { Provider } from "../provider";

export function generateStaticParams() {
	return getStaticParams();
}

export default async function Home({
	params: { locale },
}: {
	params: { locale: string };
}) {
	setStaticParamsLocale(locale);
	const currentLocale = getCurrentLocale();

	// Uncomment to test Static Generation

	const t = await getI18n();

	return (
		<div>
			<Provider locale={locale}>
				<Client />
			</Provider>
		</div>
	);
}
