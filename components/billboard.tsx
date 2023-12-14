import { Billboard as BillboardType } from '@/types';

interface BillboardProps {
	data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
	if (!data) {
		return <div>Loading...</div>;
	}
	return (
		<div className="p-0 sm:p-0 lg:p-0 rounded-xl  overflow-hidden shadow-sm">
			<div className="text-xl font-bold text-orange-500 text-center uppercase rounded-lg hover:shadow-blue-500">
				<div
					className="rounded-xl relative hover:shadow-lg  aspect-[2.4/1] overflow-hidden bg-center bg-cover"
					style={{ backgroundImage: `url(${data?.imageUrl})` }}
				></div>
				<div className="p-1 bg-orange-500 text-white h-[60px]">
					{data?.label}
				</div>
			</div>
		</div>
	);
};

export default Billboard;
