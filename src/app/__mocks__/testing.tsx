import { PropsWithChildren } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from '../store/store';
import { render as rtlRender } from '@testing-library/react';
import { updateCart } from "../store/reducers/cart";
import { MockedCartProduct, MockedCartState } from "./cart";
import { IProduct } from "../interfaces/product";
import { ICartProduct } from "../interfaces/cart";

/* 
    exporting an provider store to test components
    this works as an abstraction/extension of react testing library
*/ 
const render = (component : JSX.Element) => {
    
    const Wrapper = ({ children } : PropsWithChildren<{}>) => <Provider store={store}>{children}</Provider>;

    return rtlRender(component, { wrapper: Wrapper });
}

const openCart = () => {
    store.dispatch(updateCart({
        open: true
    }))
}

const closeCart = () => {
    store.dispatch(updateCart({
        open: false
    }));
}

const addToCart = () => {
    store.dispatch(updateCart({
        items: MockedCartState.items
    }));
}

const removeFromCart = () => {
    store.dispatch(updateCart({
        items: []
    }));
}

const increaseCartProductAmount = (cartItem : ICartProduct, amount : number) => {
    const newMockedCartProduct = Object.assign({}, cartItem);
    newMockedCartProduct.amount += amount;

    store.dispatch(updateCart({
        items: [newMockedCartProduct]
    }));

    return newMockedCartProduct;
}

const decreaseCartProductAmount = (cartItem : ICartProduct, amount : number) => {    
    const newMockedCartProduct = Object.assign({}, cartItem);
    newMockedCartProduct.amount -= amount;
    
    store.dispatch(updateCart({
        items: newMockedCartProduct.amount === 0 ? [] : [newMockedCartProduct]
    }));

    return newMockedCartProduct;
}

export * from '@testing-library/react';

export { render, openCart, closeCart, addToCart, removeFromCart, increaseCartProductAmount, decreaseCartProductAmount };