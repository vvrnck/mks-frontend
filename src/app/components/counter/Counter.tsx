import { ICartProduct, ICartState } from "@/app/interfaces/cart";
import { updateCart } from "@/app/store/reducers/cart";
import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { CounterAdd, CounterAmount, CounterLabel, CounterMain, CounterRemove, CounterWrapper, Separator } from "./style";

const Counter : React.FC<ICartProduct> = (item) => {
    const { amount, product } = item;

    const cart : ICartState = useSelector((state : RootState) => state.cart)
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        const cartItems : Array<ICartProduct> = JSON.parse(JSON.stringify(cart.items)); // deep cloning

        if (amount === 1) {    // REMOVE ITEM COMPLETELY
            const newCartItems : Array<ICartProduct> = cartItems.filter((item : ICartProduct) => item.product.id !== product.id);
            dispatch(updateCart({ items: newCartItems }));
            return toast.success("Product removed from shopping cart!");
        }

        const cartItem : (ICartProduct | undefined) = cartItems.find((item : ICartProduct) => item.product.id === product.id);
        
        if (!cartItem) return;
        cartItem.amount--;

        dispatch(updateCart({ items: cartItems }));
    }

    const handleAddItem = () => {
        const cartItems : Array<ICartProduct> = JSON.parse(JSON.stringify(cart.items)); // deep cloning
        const cartItem : (ICartProduct | undefined) = cartItems.find((item : ICartProduct) => item.product.id === product.id);
        
        if (!cartItem) return;
        cartItem.amount++;

        dispatch(updateCart({ items: cartItems }));
    }

    return (
        <>
            <CounterWrapper data-testid="counter" className="item-counter">
                <CounterLabel>
                    Qtd:
                </CounterLabel>
                <CounterMain>
                    <CounterRemove onClick={handleRemoveItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "12px", height: "12px" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                        </svg>
                    </CounterRemove>
                    <Separator />
                    <CounterAmount>
                        {amount}    
                    </CounterAmount>
                    <Separator />
                    <CounterAdd onClick={handleAddItem}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: "12px", height: "12px" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                    </CounterAdd>
                </CounterMain>
            </CounterWrapper>
        </>
    )
}

export default Counter;