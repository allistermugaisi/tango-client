import Head from 'next/head';
import Image from 'next/image';
import { Collections, Products } from '../components/sections/home';
// import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tango Ecommerce</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="A baby e-commerce website" />
				<link
					rel="shortcut icon"
					href="https://res.cloudinary.com/dgisuffs0/image/upload/v1634531590/child_m8pjmu.jpg"
					type="image/png"
				/>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
				/>
				<link
					href="https://unpkg.com/boxicons@2.0.8/css/boxicons.min.css"
					rel="stylesheet"
				/>
			</Head>
			<Collections />
			<Products />
		</div>
	);
}
