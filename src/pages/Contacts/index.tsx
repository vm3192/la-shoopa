const Contacts = () => {
	return (
		<section className="contacts section">
			<div className="container">
				<h2 className="contacts__title section_title">OUR CONTACTS</h2>
				<div className="contacts__address">
					<p>1401 South Grand Avenue</p>
					<p>Los Angeles, CA 90015</p>
					<a className="footer__top_phone" href="tel:2137482411">
						(213) 748-2411
					</a>
				</div>
				<div className="contacts__address">
					<p>100 Fairview Drive</p>
					<p>Franklin, VA 23851</p>
					<a className="footer__top_phone" href="tel:7575696100">
						(757) 569-6100
					</a>
				</div>
				<iframe
					className="contacts__iframe"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2453757013764!2d-118.26610670000001!3d34.0375763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7c60b3bfb81%3A0xdccd5267ebb0bd35!2zMTQwMSBTIEdyYW5kIEF2ZSwgTG9zIEFuZ2VsZXMsIENBIDkwMDE1LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1656680351258!5m2!1suk!2sua"
					title="map"
					style={{border: 0}}
					allowFullScreen={true}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</section>
	);
};

export default Contacts;
