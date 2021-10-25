import React from 'react';
import Link from 'next/link';

const footer = () => {
	return (
		<>
			<footer id="footer" className="section footer">
				<div className="container">
					<div className="footer-container">
						<div className="footer-center">
							<h3>Company</h3>
							<Link href="#">
								<a>About Us</a>
							</Link>
							<Link href="#">
								<a>Privacy Policy</a>
							</Link>
							<Link href="#">
								<a>Terms & Conditions</a>
							</Link>
							<Link href="#">
								<a>Contact Us</a>
							</Link>
							<Link href="#">
								<a>FAQs</a>
							</Link>
						</div>
						<div className="footer-center">
							<h3>Get To Know Us</h3>
							<Link href="#">
								<a>Shipping Info</a>
							</Link>
							<Link href="#">
								<a>Advertising</a>
							</Link>
							<Link href="#">
								<a>Affiliate Program</a>
							</Link>
							<Link href="#">
								<a>Influencer Program</a>
							</Link>
							<Link href="#">
								<a>Specials Offers</a>
							</Link>
						</div>
						<div className="footer-center">
							<h3>Let Us Help You</h3>
							<Link href="#">
								<a>My Account</a>
							</Link>
							<Link href="#">
								<a>Order History</a>
							</Link>
							<Link href="#">
								<a>Order Status</a>
							</Link>
							<Link href="#">
								<a>Wish List</a>
							</Link>
							<Link href="#">
								<a>Newsletter</a>
							</Link>
							<Link href="#">
								<a>Returns & Refunds</a>
							</Link>
						</div>
						<div className="footer-center">
							<h3>Our Location</h3>
							<div>
								<span>
									<i className="fas fa-map-marker-alt"></i>
								</span>
								42 Dream House, Dream street, 5131 Dreamville, USA
							</div>
							<div>
								<span>
									<i className="far fa-envelope"></i>
								</span>
								company@gmail.com
							</div>
							<div>
								<span>
									<i className="fas fa-phone"></i>
								</span>
								+2547 90 516 067
							</div>
							{/* <!-- <div className="payment-methods">
            <img src="./images/payment.png" alt=""/>
          </div> --> */}
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default footer;
