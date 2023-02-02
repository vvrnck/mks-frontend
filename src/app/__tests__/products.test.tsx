// __tests__/products.test.jsx
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor, openCart } from '../__mocks__/testing';
import { Cart, Products } from '../components';
import { MockedProduct, MockedProducts } from '../__mocks__/product';

describe('Products', () => {

    beforeEach(async () => {
        await act(() => {
            render(<Products {...MockedProducts} />)
        });
    });

    it('should render product items', async () => {
        await waitFor(() => {
            const list = screen.queryByTestId("product-list");
            expect(list).toBeInTheDocument();
        });
    });

    it('should add product to shopping cart', async () => {
        const id = MockedProduct.id;
        const product = screen.queryByTestId(`product-item-${id}`);
        
        if (!product) fail('no product rendered with that id');

        const button : any = product.getElementsByClassName("cart-add")[0];
        const clicked = jest.fn(() => fireEvent.click(button));

        if (!button.disabled) clicked();

        expect(button).not.toBeDisabled();
        expect(clicked).toHaveBeenCalledTimes(1);
    });
});