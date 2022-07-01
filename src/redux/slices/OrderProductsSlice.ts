import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface OrderProduct {
	id: string;
	name: string;
	image: string;
	price: number;
	count: number;
}

export interface OrderProducts {
	orderProducts: OrderProduct[];
	totalPrice: number;
}

const initialState: OrderProducts = {
	orderProducts: [],
	totalPrice: 0,
};

export const orderProductsSLice = createSlice({
	name: "orderProducts",
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<OrderProduct>) {
			state.orderProducts.push(action.payload);
			state.totalPrice = state.orderProducts.reduce(
				(total: number, el: OrderProduct) => {
					return total + el.price * el.count;
				},
				0,
			);
		},
		removeFromCart(state, action: PayloadAction<string>) {
			state.orderProducts = state.orderProducts.filter(
				(item) => item.id !== action.payload,
			);
			state.totalPrice = state.orderProducts.reduce(
				(total: number, el: OrderProduct) => {
					return total + el.price * el.count;
				},
				0,
			);
		},
		countMinus(state, action: PayloadAction<string>) {
			state.orderProducts = state.orderProducts.map((item) =>
				item.id === action.payload && item.count > 1
					? {...item, count: item.count - 1}
					: item,
			);
			state.totalPrice = state.orderProducts.reduce(
				(total: number, el: OrderProduct) => {
					return total + el.price * el.count;
				},
				0,
			);
		},
		countPlus(state, action: PayloadAction<string>) {
			state.orderProducts = state.orderProducts.map((item) =>
				item.id === action.payload ? {...item, count: item.count + 1} : item,
			);
			state.totalPrice = state.orderProducts.reduce(
				(total: number, el: OrderProduct) => {
					return total + el.price * el.count;
				},
				0,
			);
		},
	},
});

export const {addToCart, removeFromCart, countMinus, countPlus} =
	orderProductsSLice.actions;

export default orderProductsSLice.reducer;
