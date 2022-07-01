import Slider from "react-slick";
import {Link} from "react-scroll";

const Carousel = () => {
	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	return (
		<Slider {...settings}>
			<div className="slide">
				<div
					className="slide__wrapper"
					style={{
						background:
							"url(images/banner_1.jpeg) center center/cover no-repeat",
					}}>
					<div className="container">
						<h2 className="slide__title">NEW SEASON ARRIVALS 1</h2>
						<h3 className="slide__subtitle">CHECK OUT ALL THE NEW TRENDS</h3>
						<Link className="slide__btn" to="clothesList" spy={true} smooth={true} offset={-50} duration={500}>
							SHOP NOW
						</Link>
					</div>
				</div>
			</div>
			<div className="slide">
				<div
					className="slide__wrapper"
					style={{
						background:
							"url('./images/banner_2.jpeg') center center/cover no-repeat",
					}}>
					<div className="container">
						<h2 className="slide__title">NEW SEASON ARRIVALS 2</h2>
						<h3 className="slide__subtitle">CHECK OUT ALL THE NEW TRENDS</h3>
						<Link className="slide__btn" to="clothesList" spy={true} smooth={true} offset={-50} duration={500}>
							SHOP NOW
						</Link>
					</div>
				</div>
			</div>
		</Slider>
	);
};

export default Carousel;
