import { IProduct } from "./product";

export interface ICartProduct {
    amount: number;  
    product: IProduct  
}

export interface IUpdateCartState {
    open?: boolean,
    items?: Array<ICartProduct>
}

export interface ICartState {
    open: boolean,
    items: Array<ICartProduct>,
}