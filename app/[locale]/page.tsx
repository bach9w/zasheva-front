import { setStaticParamsLocale } from "next-international/server";
import { getI18n, getStaticParams } from "../../locales/server";
import Client from "./client";
import { Provider } from "./provider";

// Uncomment to test Static Generation on this page only

// @eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({
	params: { locale },
}: {
	params: { locale: string };
}) {
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
