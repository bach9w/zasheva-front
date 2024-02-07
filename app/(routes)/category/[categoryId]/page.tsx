import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import { motion } from "framer-motion";

interface CategoryPageProps {
	params: {
		categoryId: string;
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

	const sizes = await getSizes();
	const category = await getCategory(params.categoryId);

	return (
		<div className="">
			<Container>
				<Billboard data={category.billboard} />

				<div className="px-4 sm:px-6 lg:px-8 pb-24">
					<div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
						<div className="hidden ">
							<Filter valueKey="sizeId" name="Sizes" data={sizes} />
							<MobileFilters size={sizes} />
						</div>
						<div className="mt-6 lg:col-span-4 lg:mt-0">
							{product.length === 0 && <NoResults />}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
								{product.map((item) => (
									<ProductCard key={item.id} data={item} />
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
