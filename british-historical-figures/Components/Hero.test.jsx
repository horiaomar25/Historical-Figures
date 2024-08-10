import { render, screen } from '@testing-library/react';
import Hero from '../Components/Hero';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import { mocked } from 'jest-mock';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }) => <img src={src} alt={alt} />,
}));

jest.mock('next/link', () => {
  return ({ children, href }) => (
    <a href={href} data-testid="link">
      {children}
    </a>
  );
});

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    expect(screen.getByText(/Historical/i)).toBeInTheDocument();
  });

  it('renders the title and subtitle correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/Historical/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn about History's most important figures/i)).toBeInTheDocument();
  });

  it('renders the "Explore" button correctly', () => {
    render(<Hero />);
    const button = screen.getByRole('button', { name: /Explore/i });
    expect(button).toBeInTheDocument();
  });

  it('renders the image correctly', () => {
    render(<Hero />);
    const image = screen.getByAltText(/Hero Image/i);
    expect(image).toBeInTheDocument();
    
  });

  it('renders the gradient circle background', () => {
    render(<Hero />);
    const circleDiv = screen.getByRole('presentation', { hidden: true });
    expect(circleDiv).toHaveClass('circlePosition');
  });
});
