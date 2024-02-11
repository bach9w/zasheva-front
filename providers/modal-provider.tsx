"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";

const ModalProvider = ({ locale }: { locale: string }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<PreviewModal locale={locale} />
		</>
	);
};

export default ModalProvider;
