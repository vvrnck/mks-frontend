import { ICartProduct, ICartState } from "../interfaces/cart";
import { MockedProduct } from "./product";

export const MockedCartProduct : ICartProduct = {
    product: MockedProduct,
    amount: 1
}

export const MockedCartState : ICartState = {
    items: [MockedCartProduct],
    open: false
}