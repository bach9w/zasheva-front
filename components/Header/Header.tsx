import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiCctvCamera } from "react-icons/gi";

const Header = () => {
	return (
		<div className="fixed w-full bg-[#2a1e1d] h-[100px] p-5">
			<div className=" w-full fixed flex items-center justify-center  text-white "></div>
			<div className="flex gap-4">
				<Button className="bg-orange-500">BANSKO</Button>
				<Button className="bg-orange-500">
					<TiWeatherCloudy />
				</Button>
				<Button className="bg-orange-500">
					<GiCctvCamera />
				</Button>
			</div>
			<Badge className="w-full flex justify-center h-20 text-xl font-light bg-white">
				ZASHEVA KASHTA
			</Badge>
		</div>
	);
};

export default Header;
