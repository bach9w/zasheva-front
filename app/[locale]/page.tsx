import { setStaticParamsLocale } from "next-international/server";
import { getI18n, getStaticParams } from "../../locales/server";
import Client from "./client";
import { Provider } from "./provider";

export function generateStaticParams() {
	return getStaticParams();
}

// @eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({
	params: { locale },
}: {
	params: { locale: string };
}) {
	// Uncomment to test Static Generation
	setStaticParamsLocale(locale);
	const t = await getI18n();

	return (
		<div>
			<Provider locale={locale}>
				<Client />
			</Provider>
		</div>
	);
}
