import {NavLink} from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					<div className="footer__top_column">
						<h5 className="footer__top_title">Our Stores</h5>
						<div className="footer__top_contact">
							<p>1401 South Grand Avenue</p>
							<p>Los Angeles, CA 90015</p>
							<a className="footer__top_phone" href="tel:2137482411">
								(213) 748-2411
							</a>
						</div>
						<div className="footer__top_contact">
							<p>100 Fairview Drive</p>
							<p>Franklin, VA 23851</p>
							<a className="footer__top_phone" href="tel:7575696100">
								(757) 569-6100
							</a>
						</div>
						<ul className="footer__social_list">
							<li>
								<a
									className="footer__social_link"
									href="http://facebook.com"
									target="_blank"
									rel="noreferrer">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/la-shoopa-49d4f.appspot.com/o/images%2Ficons%2Ffacebook_icon.svg?alt=media&token=24865ab5-ce0c-48f6-b3ae-da4c8d236818"
										alt="facebook"
									/>
								</a>
							</li>
							<li>
								<a
									className="footer__social_link"
									href="http://instagram.com"
									target="_blank"
									rel="noreferrer">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/la-shoopa-49d4f.appspot.com/o/images%2Ficons%2Finstagram_icon.svg?alt=media&token=3a0ff512-a735-47e2-84e0-a54411cd67fb"
										alt="instagram"
									/>
								</a>
							</li>
							<li>
								<a
									className="footer__social_link"
									href="http://twitter.com"
									target="_blank"
									rel="noreferrer">
									<img
										src="https://firebasestorage.googleapis.com/v0/b/la-shoopa-49d4f.appspot.com/o/images%2Ficons%2Ftwitter_icon.svg?alt=media&token=02c5e8c7-fb2a-41e3-ae5a-b6fc92f213f4"
										alt="twitter"
									/>
								</a>
							</li>
						</ul>
					</div>
					{/* <div className="footer__top_column">
						<h5 className="footer__top_title">Blog Posts</h5>
						<ul className="footer__posts_list">
							<li className="footer__post">
								<h6 className="footer__post_title">
									Duis aute irure dolor in reprehenderit.
								</h6>
								<div className="footer__post_text">
									in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur.
								</div>
							</li>
							<li className="footer__post">
								<h6 className="footer__post_title">Ut enim ad minim veniam.</h6>
								<div className="footer__post_text">
									in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur.
								</div>
							</li>
							<li className="footer__post">
								<h6 className="footer__post_title">
									Officia deserunt mollit consectetur.
								</h6>
								<div className="footer__post_text">
									in voluptate velit esse cillum dolore eu fugiat nulla
									pariatur.
								</div>
							</li>
						</ul>
					</div> */}
					<div className="footer__top_column">
						<h5 className="footer__top_title">Support</h5>
						<ul className="footer__support_list">
							<li>
								<NavLink className="footer__support_link" to="/termsconditions">
									Terms & Conditions
								</NavLink>
							</li>
							<li>
								<NavLink className="footer__support_link" to="/faq">
									FAQ
								</NavLink>
							</li>
							<li>
								<NavLink className="footer__support_link" to="/about">
									About
								</NavLink>
							</li>
							<li>
								<NavLink className="footer__support_link" to="/contacts">
									Contacts
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="footer__rights">
						© 2014 lashoopa.com - All Rights Reserved
					</div>
					<div className="footer__payments">
						<img
							src="https://firebasestorage.googleapis.com/v0/b/la-shoopa-49d4f.appspot.com/o/images%2Ficons%2Fvisa_icon.svg?alt=media&token=dc1377dc-e8f0-4464-94bb-2010faf410df"
							alt="visa"
						/>
						<img
							src="https://firebasestorage.googleapis.com/v0/b/la-shoopa-49d4f.appspot.com/o/images%2Ficons%2Fmastercard_icon.svg?alt=media&token=dacde3b0-61c9-47fe-ab45-cbdaf213fb06"
							alt="mastercard"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
