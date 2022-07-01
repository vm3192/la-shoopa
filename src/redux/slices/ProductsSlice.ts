import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Product {
	id: string;
	name: string;
	image: string;
	price: number;
	oldPrice: number | "";
	discount: number | "";
	gender: string;
	inCart: boolean;
	descr: string;
}

export interface Products {
	productsArr: Product[];
	menProducts: Product[];
	womenProducts: Product[];
}

const initialState: Products = {
	productsArr: [],
	menProducts: [],
	womenProducts: [],
};

export const productsSLice = createSlice({
	name: "products",
	initialState,
	reducers: {
		getProducts(state, action: PayloadAction<Product[]>) {
			state.productsArr = action.payload;
			state.menProducts = action.payload.filter(
				(item) => item.gender === "male",
			);
			state.womenProducts = action.payload.filter(
				(item) => item.gender === "female",
			);
		},
		toggleInCart(state, action: PayloadAction<string>) {
			state.productsArr = state.productsArr.map((item) =>
				item.id === action.payload ? {...item, inCart: !item.inCart} : item,
			);
			state.menProducts = state.productsArr.filter(
				(item) => item.gender === "male",
			);
			state.womenProducts = state.productsArr.filter(
				(item) => item.gender === "female",
			);
		},
	},
});

export const {getProducts, toggleInCart} = productsSLice.actions;

export default productsSLice.reducer;
