import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import InCartItem from "../../components/InCartItem";
import {RootState} from "../../redux/store";

const Cart: React.FC = () => {
	const dataItems = useSelector(
		(state: RootState) => state.orderProducts.orderProducts,
	);
		const totalPrice = useSelector((state: RootState) => state.orderProducts.totalPrice)

	return (
		<section className="cart_page section">
			<div className="container">
				<h2 className="cart_page__title section_title">YOUR CHOICE</h2>
				{dataItems.length !== 0 ? (
					<>
						<ul className="cart_page__list">
							{dataItems.map((item) => (
								<li key={item.id} className="cart_page__list_item">
									<InCartItem {...item} />
								</li>
							))}
						</ul>
						<p className="cart_page__total_price">
							Total price: <span>{totalPrice} $</span>
						</p>
						<NavLink className="cart_page__btn default_btn" to="!#">
							continue order
						</NavLink>
					</>
				) : (
					<p>Your cart is empty...</p>
				)}
			</div>
		</section>
	);
};

export default Cart;
