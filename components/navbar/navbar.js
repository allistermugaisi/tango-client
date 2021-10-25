import React from 'react';
import Link from 'next/link';

const navbar = () => {
	return (
		<>
			<nav className="nav">
				<div className="wrapper container">
					<div className="logo">
						<Link href="/">
							<a>
								<img
									src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/c_fit,h_64,w_144/v1634043288/tango-logo_zcj4cs.jpg"
									alt="tango-logo"
								/>
							</a>
						</Link>
					</div>
					<ul className="nav-list">
						<div className="top">
							<label for="" className="btn close-btn">
								<i className="fas fa-times"></i>
							</label>
						</div>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/">Products</Link>
						</li>
						<li>
							<Link href="/" className="desktop-item">
								<a>
									Categories{' '}
									<span>
										<i className="fas fa-chevron-down"></i>
									</span>
								</a>
							</Link>
							<input type="checkbox" id="showMega" />
							<label for="showMega" className="mobile-item">
								Categories{' '}
								<span>
									<i className="fas fa-chevron-down"></i>
								</span>
							</label>
							<div className="mega-box">
								<div className="content">
									<div className="row">
										<img
											src="https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1634049574/mega2-image_keudlp.jpg"
											alt=""
										/>
									</div>
									<div className="row">
										<header>Baby Fitters</header>
										<ul className="mega-links">
											<li>
												<Link href="#">Baby Shoes</Link>
											</li>
											<li>
												<Link href="#">Baby Socks</Link>
											</li>
											<li>
												<Link href="#">Baby Stockings & Tights</Link>
											</li>
											{/* <li>
												<Link href="#">Jackets</Link>
											</li> */}
										</ul>
									</div>
									<div className="row">
										<header>Toddler Fit</header>
										<ul className="mega-links">
											<li>
												<Link href="#">Stockings & Tights</Link>
											</li>
											<li>
												<Link href="#">Toddler Socks</Link>
											</li>
											<li>
												<Link href="#">Toddler Shoes</Link>
											</li>
											<li>
												<Link href="#">Leggings & Pants</Link>
											</li>
										</ul>
									</div>
									<div className="row">
										<header>Kids</header>
										<ul className="mega-links">
											<li>
												<Link href="#">Kids Socks</Link>
											</li>
											<li>
												<Link href="#">Leggings & Pants</Link>
											</li>
											<li>
												<Link href="#">Stockings & Tights</Link>
											</li>
											<li>
												<Link href="#">Kids Shoes</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</li>
						<li>
							<Link href="/" className="desktop-item">
								<a>
									Our Store{' '}
									<span>
										<i className="fas fa-chevron-down"></i>
									</span>
								</a>
							</Link>
							<input type="checkbox" id="showdrop1" />
							<label for="showdrop1" className="mobile-item">
								Our Store{' '}
								<span>
									<i className="fas fa-chevron-down"></i>
								</span>
							</label>
							<ul className="drop-menu1">
								<li>
									<Link href="/">Vendor Store listings</Link>
								</li>
								<li>
									<Link href="/">Store Details</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link href="/">Blog</Link>
						</li>
						<li>
							<Link href="/" className="desktop-item">
								<a>
									More{' '}
									<span>
										<i className="fas fa-chevron-down"></i>
									</span>
								</a>
							</Link>
							<input type="checkbox" id="showdrop2" />
							<label for="showdrop2" className="mobile-item">
								More{' '}
								<span>
									<i className="fas fa-chevron-down"></i>
								</span>
							</label>
							<ul className="drop-menu2">
								<li>
									<Link href="">Order Status</Link>
								</li>
								<li>
									<Link href="">About</Link>
								</li>
								<li>
									<Link href="">Support</Link>
								</li>
								<li>
									<Link href="">FAQs</Link>
								</li>
							</ul>
						</li>
					</ul>
					<ul className="nav-list">
						{/* icons  */}
						<li className="icons">
							<Link href="/">
								<span>
									{/* <img src="./images/shoppingBag.svg" alt="" />  */}
									<i className="bx bx-cart-alt bx-lg"></i>
									<small className="count d-flex">5</small>
								</span>
							</Link>
							<span>{/* <img src="./images/search.svg" alt="" /> */}</span>
						</li>
					</ul>
					<label for="" className="btn open-btn">
						<i className="fas fa-bars"></i>
					</label>
				</div>
			</nav>
		</>
	);
};

export default navbar;
