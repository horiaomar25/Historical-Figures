import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
    it('renders the heading', () => {
        render(<About />);
        const heading = screen.getByRole('heading', { name: /Try this Quiz/i });
        expect(heading).toBeInTheDocument();
    });

    it('clicking the quiz button', () => {
        render(<About />);
        const button = screen.getByRole('button', { name: /Go to quiz/i });
        fireEvent.click(button);
        expect(screen.getByText(/Go to quiz/i)).toBeInTheDocument();
    });
});
