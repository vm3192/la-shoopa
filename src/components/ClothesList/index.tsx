import {useState, useEffect} from "react";
import CardItem from "../CardItem";
import ReactPaginate from "react-paginate";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {Product} from "../../redux/slices/ProductsSlice";

const ClothesList: React.FC = () => {
	const dataItems = useSelector(
		(state: RootState) => state.products.productsArr,
	);
	const [currentItems, setCurrentItems] = useState<Product[]>([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(dataItems.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(dataItems.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, dataItems]);

	const handlePageClick = (event: {selected: number}) => {
		const newOffset = (event.selected * itemsPerPage) % dataItems.length;
		setItemOffset(newOffset);
	};

	return (
		<section className="clothes_list section" id="clothesList">
			<div className="container">
				<h2 className="clothes_list__title section_title">OUR PRODUCTS</h2>
				<ul className="clothes_list__list">
					{currentItems.map(
						(item) => {
							return (
								<li className="clothes_list__list_item" key={item.id}>
									<CardItem {...item} />
								</li>
							);
						},
					)}
				</ul>
				<ReactPaginate
					breakLabel="..."
					nextLabel="next"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					pageCount={pageCount}
					previousLabel="prev"
					containerClassName="pagination"
					pageLinkClassName="pagination__link"
					previousLinkClassName="pagination__link pagination__link--pag_prev"
					nextLinkClassName="pagination__link pagination__link--pag_next"
					activeLinkClassName="pagination__link pagination__link--pag_active"
				/>
			</div>
		</section>
	);
};

export default ClothesList;
