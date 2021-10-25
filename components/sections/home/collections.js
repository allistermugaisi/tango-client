import React from 'react';
import Link from 'next/link';

const collections = () => {
	return (
		<>
			<section className="section promotion">
				<div className="title">
					<h2>Store Collections</h2>
					<span>Select from the premium product and save plenty money</span>
				</div>

				<div className="promotion-layout container">
					<div className="promotion-item">
						<img
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1634531593/shoes_k0zakp.jpg"
							alt=""
						/>
						<div className="promotion-content">
							<h3>Shoes</h3>
							<Link href="#">
								<a>BUY NOW</a>
							</Link>
						</div>
					</div>

					<div className="promotion-item">
						<img
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1634531592/cool_socks_z2eshw.jpg"
							alt=""
						/>
						<div className="promotion-content">
							<h3>Socks</h3>
							<Link href="#">
								<a>BUY NOW</a>
							</Link>
						</div>
					</div>

					<div className="promotion-item">
						<img
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1634531590/child_m8pjmu.jpg"
							alt=""
						/>
						<div className="promotion-content">
							<h3>Sock Pair</h3>
							<Link href="#">
								<a>BUY NOW</a>
							</Link>
						</div>
					</div>

					<div className="promotion-item">
						<img
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1634531592/socks_wv5fk0.png"
							alt=""
						/>
						<div className="promotion-content">
							<h3>Socks Pair</h3>
							<Link href="#">
								<a>BUY NOW</a>
							</Link>
						</div>
					</div>

					<div className="promotion-item">
						<img
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1634531593/shoes_k0zakp.jpg"
							alt=""
						/>
						<div className="promotion-content">
							<h3>Shoes</h3>
							<Link href="#">
								<a>BUY NOW</a>
							</Link>
						</div>
					</div>

					<div className="promotion-item">
						<img
							src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1634531590/child_m8pjmu.jpg"
							alt=""
						/>
						<div className="promotion-content">
							<h3>Cool Socks</h3>
							<Link href="#">
								<a>BUY NOW</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default collections;
