import {useSelector} from "react-redux";
import { Product } from "../../redux/slices/ProductsSlice";
import {RootState} from "../../redux/store";
import CardItem from "../CardItem";

const Sales = () => {
	const dataItems = useSelector(
		(state: RootState) => state.products.productsArr,
	)
	.filter((item) => item.discount);
	const salesArr: Product[] = [];

	salesArr.push(
		dataItems[dataItems.length - 1],
		dataItems[dataItems.length - 2],
		dataItems[dataItems.length - 3],
	)

	return (
		<section className="section_sales section">
			<div className="container">
				<h2 className="section_sales__title section_title">SALES</h2>
				<ul className="section_sales__list">
					{salesArr.map((item) =>
						item ? (
							<li
								className="section_sales__list_item"
								key={item.id}
							>
								<CardItem {...item} />
							</li>
						) : null,
					)}
				</ul>
			</div>
		</section>
	);
};

export default Sales;
