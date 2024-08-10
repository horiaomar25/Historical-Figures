import { render, screen, fireEvent } from '@testing-library/react';
import FigureCard from './FigureCard';
import '@testing-library/jest-dom/';
import Image from '../public/no-image.png';

// Mock the Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }) => <img src={src} alt={alt} />,
}));

// Mock the InformationCard component
jest.mock('../Components/InformationCard', () => ({ figure, onClose }) => (
  <div data-testid="information-card">
    <p>{figure.name}</p>
    <button onClick={onClose}>Close</button>
  </div>
));



const mockFigures = [
  { name: 'Figure 1', wikipediaImageUrl: 'image1.jpg' },
  { name: 'Figure 2', wikipediaImageUrl: '' }, // No image URL provided
];

test('renders figures correctly', () => {
  render(<FigureCard figures={mockFigures} loading={false} />);
  
  const figureCards = screen.getAllByTestId('figure-card');
  expect(figureCards.length).toBe(2); // Expect 2 figure cards

  const firstFigureName = screen.getAllByText('Figure 1')[0];
  const secondFigureName = screen.getAllByText('Figure 2')[0];
  
  expect(firstFigureName).toBeInTheDocument();
  expect(secondFigureName).toBeInTheDocument();
});

test('renders images with correct src and alt attributes', () => {
  render(<FigureCard figures={mockFigures} loading={false} />);
  
  const image1 = screen.getByAltText('Figure 1');
  
  
  expect(image1).toHaveAttribute('src', 'image1.jpg');
  
});

test('displays InformationCard when figure button is clicked', () => {
  render(<FigureCard figures={mockFigures} loading={false} />);
  
  const firstButton = screen.getByLabelText('Open information for Figure 1');
  fireEvent.click(firstButton);

  const informationCard = screen.getByTestId('information-card');
  expect(informationCard).toBeInTheDocument();
  
  const figureName = screen.getByText('Figure 1', { selector: 'p' });
  expect(figureName).toBeInTheDocument();
});

test('closes InformationCard when close button is clicked', () => {
  render(<FigureCard figures={mockFigures} loading={false} />);
  
  const firstButton = screen.getByLabelText('Open information for Figure 1');
  fireEvent.click(firstButton);

  const closeButton = screen.getByText('Close');
  fireEvent.click(closeButton);

  const informationCard = screen.queryByTestId('information-card');
  expect(informationCard).not.toBeInTheDocument();
});

test('does not display InformationCard when no figure is selected', () => {
  render(<FigureCard figures={mockFigures} loading={false} />);
  
  const informationCard = screen.queryByTestId('information-card');
  expect(informationCard).not.toBeInTheDocument();
});