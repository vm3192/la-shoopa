import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import OrderProductsSlice from "./slices/OrderProductsSlice";
import ProductsSlice from "./slices/ProductsSlice";

export const store = configureStore({
	reducer: {
		products: ProductsSlice,
		orderProducts: OrderProductsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
