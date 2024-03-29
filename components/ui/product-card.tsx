"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { BookUpIcon, CalendarPlus, Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import usePreviewModal from "@/hooks/use-preview-modal";

import { Product } from "@/types";

interface ProductCardProps {
	data: Product;
	locale: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
	data,
	locale,
}: ProductCardProps) => {
	const previewModal = usePreviewModal();

	const router = useRouter();

	const handleClick = () => {
		router.push(`/product/${data?.id}`);
	};

	const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.stopPropagation();

		previewModal.onOpen(data);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: -150 }}
			whileInView={{
				opacity: 1,
				x: 0,
				transition: {
					duration: 1,
				},
			}}
			viewport={{ once: true }}
			onClick={handleClick}
			className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
		>
			{/* Image & actions */}
			<div className="aspect-square rounded-xl bg-gray-100 relative">
				<Image
					src={data.images?.[0]?.url}
					alt=""
					fill
					className="aspect-square object-cover rounded-md"
				/>
				<div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
					<div className="flex gap-x-6 justify-center">
						<IconButton
							onClick={onPreview}
							icon={<Expand size={20} className="text-gray-600" />}
						/>
						<a href="tel:+359897962266">
							<IconButton
								onClick={() => {}}
								icon={<CalendarPlus size={20} className="text-gray-600" />}
							/>
						</a>
					</div>
				</div>
			</div>
			{/* Description */}
			<div className=" bg-white flex justify-center h-[50px]">
				<p className="font-semibold text-lg">
					{locale === "bg"
						? data.name
						: data.name === "Двойна стая с тераса"
						? "Double room with terrace"
						: data.name === "Двойна стая с вана"
						? "Double room with bath"
						: "Studio room with terrace"}
				</p>
				<p className="text-sm text-gray-500">{data.category?.name}</p>
			</div>
			{/* Price & Reiew */}
			<div className=" flex items-end justify-center">
				<Currency value={data?.price} />
			</div>
		</motion.div>
	);
};

export default ProductCard;
