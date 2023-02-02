// __tests__/products.test.jsx
import '@testing-library/jest-dom';
import { act, render, screen, openCart, addToCart, closeCart, removeFromCart, increaseCartProductAmount, decreaseCartProductAmount } from '../__mocks__/testing';
import { Cart } from '../components';
import { MockedCartProduct } from '../__mocks__/cart';

describe('Cart', () => {

    beforeEach(async () => {
        await act(() => {
            render(<Cart />);
		});
    });

    it('should render shopping cart', async () => {
            await act(() => {
                openCart();
            });
            
            const shoppingCart = screen.queryByTestId("shopping-cart");
            expect(shoppingCart).toBeInTheDocument();
        
    });

    it('should render shopping cart items', async () => {
        await act(() => {
            openCart();
        });
        
        const shoppingCartItems = screen.queryByTestId("shopping-cart-items");
        expect(shoppingCartItems).toBeInTheDocument();
    });

    /* add product */
    it('should have product on shopping cart', async () => {
        await act(() => {
            openCart();
            addToCart();
        });
        
        const id = MockedCartProduct.product.id;
        const cartItem = screen.queryByTestId(`cart-item-${id}`);
        
        expect(cartItem).toHaveTextContent(MockedCartProduct.product.name)
    });

    it('should close shopping cart', async () => {
        await act(() => {
            openCart();
        });

        const cart = screen.getByTestId("shopping-cart");

        await act(() => {
            closeCart();
        });

        expect(cart).not.toBeInTheDocument();
    });

    /* remove product */
    it('should not have product on shopping cart', async () => {
        await act(() => {
            openCart();
            addToCart();
        });
        
        const id = MockedCartProduct.product.id;
        const cartItem = screen.queryByTestId(`cart-item-${id}`);

        await act(() => {
            removeFromCart();
        });        

        expect(cartItem).not.toBeInTheDocument();
    });

    it('should increase product amount on shopping cart', async () => {
        const amountToIncrease = 5;
        
        await act(() => {
            openCart();
            increaseCartProductAmount(MockedCartProduct, amountToIncrease);
        });
        
        const id = MockedCartProduct.product.id;
        const cartItem = screen.queryByTestId(`cart-item-${id}`);
        const counter = cartItem?.getElementsByClassName('item-counter')[0];
        
        const expectedAmount = MockedCartProduct.amount + amountToIncrease;
        expect(counter).toHaveTextContent(expectedAmount.toString());
    });

    it('should decrease product amount on shopping cart', async () => {
        const amountToIncrease = 5;
        const amountToDecrease = 1;
        
        await act(() => {
            openCart();
            addToCart();
        });

        const id = MockedCartProduct.product.id;
        const cartItem = screen.queryByTestId(`cart-item-${id}`);

        await act(() => {
            const cartProduct = increaseCartProductAmount(MockedCartProduct, amountToIncrease);
            decreaseCartProductAmount(cartProduct, amountToDecrease);
        });
        
        const counter = cartItem?.getElementsByClassName('item-counter')[0];
        
        const expectedAmount = (MockedCartProduct.amount + amountToIncrease) - amountToDecrease;
        expect(counter).toHaveTextContent(expectedAmount.toString());
    });

    it('should remove product from shopping cart when amount is 0', async () => {
        const amountToDecrease = 1;
        
        await act(() => {
            openCart();
        });

        await act(() => {
            decreaseCartProductAmount(MockedCartProduct, amountToDecrease);
        });

        const id = MockedCartProduct.product.id;
        const cartItem = screen.queryByTestId(`cart-item-${id}`);
    
        expect(cartItem).not.toBeInTheDocument();
    });


});