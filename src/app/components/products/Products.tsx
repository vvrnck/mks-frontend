'use client';

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "@/app/interfaces/product";
import { IAPIResponse } from "@/app/interfaces/response";
import { RootState } from "@/app/store/store";
import { ICartProduct, ICartState } from "@/app/interfaces/cart";
import { updateCart } from "@/app/store/reducers/cart";
import { toast } from "react-toastify";

import { ProductAction, ProductDescription, ProductImage, ProductItem, ProductList, ProductMain, ProductPrice, ProductTitle } from "./style";


const Products : React.FC<IAPIResponse> = ({ products, count }) => {
    const cart : ICartState = useSelector((state : RootState) => state.cart);
    const dispatch = useDispatch();

    const handleAddCart = (product : IProduct) => {
        try {
            const newCartItems : Array<ICartProduct> = JSON.parse(JSON.stringify(cart.items)); // deep cloning array
            const cartItem : (ICartProduct | undefined) = newCartItems.find((item : ICartProduct) => item.product.id === product.id);
            
            if (!cartItem) newCartItems.push({ product, amount: 1 });
            else cartItem.amount++;
            
            dispatch(updateCart({ items: newCartItems }));

            toast.success("Product added to shopping cart!");
        } catch (e) {
            console.error(e);
            console.warn("FAILED TO ADD ITEM TO CART");
        }
    }

    if (!products || !products.length) return null;

    return (
        <>
            <ProductList size={products.length} data-testid="product-list">
                {products.map((item : IProduct, index : number) => (
                    <ProductItem key={index} data-testid={`product-item-${item.id}`}>
                        <ProductImage>
                            <Image 
                                src={item.photo} 
                                alt={item.photo.split("products/")[1].replace(/\.[^/.]+$/, "")} // SEO purposes
                                fill
                                sizes="(max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        33vw"
                                priority
                                // objectFit='contain' // deprecated > passed in styled component to avoid console warning
                            />
                        </ProductImage>
                        <ProductMain>
                            <ProductTitle>
                                {item.name}
                            </ProductTitle>
                            <ProductPrice>
                                R${item.price.slice(0, -3)}
                            </ProductPrice>
                        </ProductMain>
                        <ProductDescription>
                            <p>{item.description}</p>
                        </ProductDescription>
                        <ProductAction onClick={() => handleAddCart(item)} className="cart-add">
                            <div style={{ width: "12px", height: "13.5px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                            </div>
                            <span>
                                COMPRAR
                            </span>
                        </ProductAction>
                    </ProductItem>
                ))}
            </ProductList>
        </>
    );
}

export default Products;