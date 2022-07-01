import {useState} from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {RootState} from "../../redux/store";

const Header = () => {
	const [activeBurger, setActiveBurger] = useState({
		isActive: false,
	});
	const cartNum: number = useSelector(
		(state: RootState) => state.orderProducts.orderProducts,
	).length;

	const clickBurger: React.MouseEventHandler<HTMLDivElement> = () => {
		const body = document.querySelector("body");
		body?.classList.toggle("active");

		setActiveBurger({
			...activeBurger,
			isActive: !activeBurger.isActive,
		});
	};

	const clickLink: React.MouseEventHandler<HTMLAnchorElement> = () => {
		setActiveBurger({
			...activeBurger,
			isActive: false,
		});
	};

	return (
		<header className="header">
			<div className="container">
				<div className="header__row">
					<NavLink className="header__logo" to="/">
						La Shoopa
					</NavLink>
					<div className="header__burger" onClick={clickBurger}>
						<img src="images/icons/burger_icon.svg" alt="menu" />
					</div>
					<nav
						className={
							activeBurger.isActive ? "header__menu active" : "header__menu"
						}>
						<div className="header__close" onClick={clickBurger}>
							<img src="images/icons/close_icon.svg" alt="close" />
						</div>
						<ul className="header__list">
							<li>
								<NavLink
									className={({isActive}) =>
										isActive ? "header__link active" : "header__link"
									}
									to="men"
									onClick={clickLink}>
									men
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({isActive}) =>
										isActive ? "header__link active" : "header__link"
									}
									to="women"
									onClick={clickLink}>
									women
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({isActive}) =>
										isActive ? "header__link active" : "header__link"
									}
									to="about"
									onClick={clickLink}>
									about
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({isActive}) =>
										isActive ? "header__link active" : "header__link"
									}
									to="contacts"
									onClick={clickLink}>
									contacts
								</NavLink>
							</li>
							<li>
								<NavLink className="header__cart" to="cart" onClick={clickLink}>
									{cartNum ? (
										<div className="header__cart_num">{cartNum}</div>
									) : null}
									<img src="/images/icons/cart_icon.svg" alt="cart" />
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
