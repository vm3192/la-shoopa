import {useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import {useAppDispatch} from "./redux/store";
import {onValue, ref} from "firebase/database";
import {db} from "./firebase";
import {getProducts} from "./redux/slices/ProductsSlice";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/styles.scss";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import ErrorPage from "./pages/ErrorPage";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			dispatch(getProducts(snapshot.val().products));
		});
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="men" element={<Men />} />
					<Route path="women" element={<Women />} />
					<Route path="contacts" element={<Contacts />} />
					<Route path="cart" element={<Cart />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
