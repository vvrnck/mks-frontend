// __tests__/products.test.jsx
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '../__mocks__/testing';
import { Footer } from '../components';

describe('Footer', () => {

    beforeEach(async () => {
        await act(() => {
            render(<Footer />);
		});
    });

    it('should render footer', async () => {
        await waitFor(() => {
            const footer : any = screen.queryByTestId("footer");
            expect(footer).toBeInTheDocument();
        });
    });
});