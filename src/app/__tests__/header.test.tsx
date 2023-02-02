// __tests__/products.test.jsx
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen, waitFor } from '../__mocks__/testing';
import { Header } from '../components';

describe('Header', () => {

    beforeEach(async () => {
        await act(() => {
            render(<Header />);
        });
    });

    it('should open shopping cart', async () => {
        await waitFor(() => {
            const toggleCart : any = screen.queryByTestId("cart-toggle");
            const clicked = jest.fn(() => fireEvent.click(toggleCart));
            clicked();
            expect(clicked).toHaveBeenCalledTimes(1);
        });
    });
});