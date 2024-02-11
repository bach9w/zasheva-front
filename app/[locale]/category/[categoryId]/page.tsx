import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import Example from "@/components/loader/CutOutTextLoader";
import { motion } from "framer-motion";
import { getCurrentLocale, getStaticParams } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

interface CategoryPageProps {
	params: {
		categoryId: string;
		locale: string;
	};
	searchParams: {
		sizeId: string;
	};
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
	params,
	searchParams,
}) => {
	const product = await getProducts({
		categoryId: params.categoryId,
		sizeId: searchParams.sizeId,
	});
	const locale = getCurrentLocale();

	const sizes = await getSizes();
	const category = await getCategory(params.categoryId);

	return (
		<div className="">
			<Example />
			<Container>
				<Billboard data={category.billboard} />

				<div className="px-4 sm:px-6 lg:px-8 pb-24">
					<div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
						<div className="hidden ">
							<Filter valueKey="sizeId" name="Sizes" data={sizes} />
							<MobileFilters size={sizes} />
						</div>
						<div className="mt-6 lg:col-span-4 flex flex-col  ">
							{product.length === 0 && <NoResults />}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
								{product.map((item) => (
									<ProductCard locale={locale} key={item.id} data={item} />
								))}
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default CategoryPage;
