import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import {addToCart, OrderProduct, removeFromCart} from "../../redux/slices/OrderProductsSlice";
import {Product, toggleInCart} from "../../redux/slices/ProductsSlice";
import {useAppDispatch} from "../../redux/store";
import styles from "./CardItem.module.scss";

const CardItem: React.FC<Product> = ({
	id,
	name,
	image,
	price,
	oldPrice,
	discount,
	gender,
	inCart,
}) => {
	const dispatch = useAppDispatch();

	const handleAddClick: MouseEventHandler<HTMLButtonElement> = () => {
		const product: OrderProduct = {
			id,
			name,
			image,
			price,
			count: 1,
		};
		dispatch(toggleInCart(id));
		dispatch(addToCart(product));
	};

	const handleRemoveCLick: MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(toggleInCart(id));
		dispatch(removeFromCart(id))
	}

	return (
		<div className={styles.card_item}>
			<Link to={`/product/${id}`}>
				<div className={styles.card_item__img}>
					<img src={image} alt={name} />
				</div>
				<h6 className={styles.card_item__name}>{name}</h6>
			</Link>
			<div className={styles.card_item__bottom}>
				<ul className={styles.card_item__price_list}>
					<li className={styles.card_item__price}>{price} $</li>
					{oldPrice !== "" && (
						<li className={styles.card_item__old_price}>{oldPrice} $</li>
					)}
				</ul>
				<button
					className={styles.card_item__to_cart}
					onClick={!inCart ? handleAddClick : handleRemoveCLick}
					title="add to cart">
					<img
						src={
							inCart
								? "images/icons/added_icon.svg"
								: "images/icons/add_icon.svg"
						}
						alt="add to cart"
					/>
				</button>
			</div>
			{discount && <div className={styles.card_item__sale}>{discount} %</div>}
		</div>
	);
};

export default CardItem;
