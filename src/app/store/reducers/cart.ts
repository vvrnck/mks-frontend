import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartState, IUpdateCartState } from "@/app/interfaces/cart";

const initialState: ICartState = {
    open: false,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action : PayloadAction<IUpdateCartState>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        resetCart: () => {
            return { ...initialState };
        }
    },
});

// Action creators are generated for each case reducer function
export const { updateCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;