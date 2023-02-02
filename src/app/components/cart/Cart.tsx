'use client'

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { ICartProduct, ICartState } from "@/app/interfaces/cart";
import { updateCart } from "@/app/store/reducers/cart";
import { toast } from "react-toastify";
import Image from "next/image";
import Counter from "../counter/Counter";

import { AsideCart, CartFooter, CartHeader, CartItem, CartItemAmount, CartItemImage, CartItemInfo, CartItemName, CartItemPrice, CartItems, CartMain, CartTitle, CartTotal, CartWrapper, RemoveItem } from "./style";

const Cart : React.FC = () => {
    const cart : ICartState = useSelector((state : RootState) => state.cart);
    const dispatch = useDispatch();
    
    const handleToggleCart = () => {
        const newCartOpenValue : boolean = cart.open ? false : true;
        dispatch(updateCart({ open: newCartOpenValue }));
    }

    const handleRemoveItemById = (id : number) => {
        const cartItems : Array<ICartProduct> = JSON.parse(JSON.stringify(cart.items)); // deep cloning
        const newCartItems : Array<ICartProduct> = cartItems.filter((item : ICartProduct) => item.product.id !== id);
        dispatch(updateCart({ items: newCartItems }));
        toast.success("Product removed from shopping cart!");
    }

    const calculateTotal = () => {
        const sum = cart.items.reduce((a : number, obj : ICartProduct) => a + (obj.amount * parseInt(obj.product.price)), 0);
        return sum;
    }

    if (!cart.open) return null;

    return (
        <>  
            <AsideCart data-testid="shopping-cart">
                <CartWrapper>
                    <CartHeader>
                        <CartTitle>
                            Carrinho<br /> de compras
                        </CartTitle>
                        <div 
                            style={{ 
                                width: "38px", 
                                height: "38px",
                                backgroundColor: "#000",
                                borderRadius: "38px",
                                padding: "4px",
                                cursor: "pointer"
                            }}
                            onClick={handleToggleCart}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </CartHeader>
                    <CartMain>
                        <CartItems data-testid="shopping-cart-items">
                            {cart.items.map((item : ICartProduct) => {
                                const { id, photo, name, price } = item.product;
                                
                                return (
                                    <CartItem key={id} data-testid={`cart-item-${id}`}>
                                        <RemoveItem onClick={() => handleRemoveItemById(id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </RemoveItem>
                                        <CartItemInfo>
                                            <div style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px"
                                            }}>
                                                <CartItemImage>
                                                    <Image 
                                                        src={photo} 
                                                        alt={photo.split("products/")[1].replace(/\.[^/.]+$/, "")} // SEO purposes
                                                        fill
                                                        priority
                                                        sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                                                    />
                                                </CartItemImage>
                                                <CartItemName>
                                                    {name}
                                                </CartItemName>
                                            </div>
                                            <CartItemAmount>
                                                <Counter {...item} />
                                            </CartItemAmount>
                                            <CartItemPrice>
                                                R${price.substring(0, price.indexOf("."))}
                                            </CartItemPrice>
                                        </CartItemInfo>
                                    </CartItem>
                                )
                            })}
                        </CartItems>
                        <CartTotal>
                            <div>Total:</div>
                            <div>R$ {calculateTotal()}</div>
                        </CartTotal>
                    </CartMain>
                    <CartFooter>
                        Finalizar Compra
                    </CartFooter>
                </CartWrapper>
            </AsideCart>
        </>
    )
}


export default Cart;