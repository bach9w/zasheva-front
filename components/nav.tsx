import Navbar from './nav/navbar';
import ScrolledNav from './nav/scrolled-nav';

export default async function Nav() {
	return (
		<div>
			<Navbar />
			<ScrolledNav />
		</div>
	);
}
