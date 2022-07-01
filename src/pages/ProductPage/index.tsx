import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
	addToCart,
	OrderProduct,
	removeFromCart,
} from "../../redux/slices/OrderProductsSlice";
import {Product, toggleInCart} from "../../redux/slices/ProductsSlice";
import {RootState, useAppDispatch} from "../../redux/store";

const ProductPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const {id} = useParams();
	const product = useSelector(
		(state: RootState) => state.products.productsArr,
	).find((item: Product) => item.id === id);
	const [productItem, setProductItem] = useState<Product>({
		id: "",
		name: "",
		image: "",
		price: 0,
		oldPrice: 0,
		discount: 0,
		gender: "",
		inCart: false,
		descr: "",
	});

	useEffect(() => {
		if (product) {
			setProductItem(product);
		}
	}, [id, product]);

	const handleAddClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		const product: OrderProduct = {
			id: productItem.id,
			name: productItem.name,
			image: productItem.image,
			price: productItem.price,
			count: 1,
		};
		dispatch(toggleInCart(productItem.id));
		dispatch(addToCart(product));
	};

	const handleRemoveClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(toggleInCart(productItem.id));
		dispatch(removeFromCart(productItem.id));
	};

	return (
		<section className="product_page section">
			<div className="container">
				<h2 className="product_page__title section_title">
					{productItem.name}
				</h2>
				<div className="product_page__top">
					<div className="product_page__image">
						<img src={productItem.image} alt={productItem.name} />
					</div>
					<div className="product_page__characters">
						<h3>Characters:</h3>
						<ul className="product_page__list">
							<li className="product_page__list_item">
								Price: {productItem.price} $
							</li>
							<li className="product_page__list_item">
								{productItem.oldPrice
									? "Old price: " + productItem.oldPrice + " $"
									: null}
							</li>
							<li className="product_page__list_item">
								{productItem.discount
									? "Discount: " + productItem.discount + " %"
									: null}
							</li>
							<li className="product_page__list_item">
								For: {productItem.gender === "men" ? "men" : "women"}
							</li>
						</ul>
						<button
							className="product_page__btn default_btn"
							onClick={productItem.inCart ? handleRemoveClick : handleAddClick}>
							{productItem.inCart ? "remove from cart" : "add to cart"}
						</button>
					</div>
				</div>
				<div className="product_page__bottom">
					<h3>Description:</h3>
					<div className="product_page__descr">{productItem.descr}</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
