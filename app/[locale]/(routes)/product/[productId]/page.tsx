import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { SwipeCarousel } from "@/components/ui/gallery/swipeCarousel";
import Info from "@/components/info";
import Button from "@/components/ui/button";
import {
	BellRingIcon,
	CalendarCheck,
	PhoneCall,
	PlusCircleIcon,
} from "lucide-react";
import Link from "next/link";
import Example from "@/components/loader/CutOutTextLoader";
import { getCurrentLocale, getStaticParams } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

interface ProductPageProps {
	params: {
		productId: string;
	};
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
	const product = await getProduct(params.productId);
	const suggestedProducts = await getProducts({
		categoryId: product.category?.id,
	});
	const locale = getCurrentLocale();

	const listTitle = locale === "bg" ? "Предложения" : "Suggested rooms";
	return (
		<div className="bg-white">
			<Example />
			<Container>
				<div className="sm:hidden bg-black h-[50px] flex items-center justify-center ">
					<div className=" items-center flex gap-x-4">
						<Link href="https://www.booking.com/hotel/bg/zashieva-kshcha.html?aid=330843;lang=en;pb=1">
							<Button className="flex items-center gap-x-2 h-10 md:h-auto">
								<PlusCircleIcon />
								Запази стая
							</Button>
						</Link>
						<a href="tel:+359897962266">
							<Button className="flex items-center gap-x-2 h-10 md:h-auto">
								<PhoneCall />
								Провери наличност
							</Button>
						</a>
					</div>
				</div>
				<div className="px-2 py-10 sm:px-6 lg:px-8">
					<div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
						<SwipeCarousel images={product.images} />
						<div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
							<Info locale={locale} data={product} />
						</div>
					</div>
					<hr className="my-10" />

					<ProductList title={listTitle} items={suggestedProducts} />
				</div>
			</Container>
		</div>
	);
};
export default ProductPage;
