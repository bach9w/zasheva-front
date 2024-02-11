import dynamic from "next/dynamic";

const DynamicNotFound = dynamic(() => import("./_not-found"), { ssr: false });

export default function NotFound() {
	return <DynamicNotFound />;
}
