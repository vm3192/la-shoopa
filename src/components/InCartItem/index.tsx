import {
	countMinus,
	countPlus,
	OrderProduct,
	removeFromCart,
} from "../../redux/slices/OrderProductsSlice";
import { toggleInCart } from "../../redux/slices/ProductsSlice";
import {useAppDispatch} from "../../redux/store";
import styles from "./InCartItem.module.scss";

const InCartItem: React.FC<OrderProduct> = ({
	id,
	name,
	image,
	price,
	count,
}) => {
	const dispatch = useAppDispatch();

	const handleRemoveClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(removeFromCart(id));
		dispatch(toggleInCart(id))
	};

	const clickMinus: React.MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(countMinus(id));
	};

	const clickPlus: React.MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(countPlus(id));
	};

	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<img src={image} alt={name} />
			</div>
			<div className={styles.card__info}>
				<h6 className={styles.card__name}>{name}</h6>
				<p className={styles.card__price}>{price * count} $</p>
				<div className={styles.card__quantity}>
					<button className={styles.card__minus} onClick={clickMinus}>
						-
					</button>
					<span className={styles.card__digit}>{count}</span>
					<button className={styles.card__plus} onClick={clickPlus}>
						+
					</button>
				</div>
			</div>
			<button
				className={styles.card__close_btn}
				onClick={handleRemoveClick}></button>
		</div>
	);
};

export default InCartItem;
