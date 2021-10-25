import Navbar from './navbar/navbar';
import Footer from './footer/footer';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className="main-content">{children}</main>
			<Footer />
		</>
	);
}
