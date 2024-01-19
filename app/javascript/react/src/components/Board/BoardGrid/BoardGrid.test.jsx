import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BoardGrid from './BoardGrid';

describe('BoardGrid Component', () => {
  it('renders without crashing', () => {
    render(<BoardGrid grid={[]} />);
  });

  it('renders a grid with mines and empty cells', () => {
    const mockGrid = [[1, 0], [0, 1]];
    render(<BoardGrid grid={mockGrid} />);
  });


  it('renders a Mine cell', () => {
    const mockGridData = [[1]]; 

    render(<BoardGrid grid={mockGridData} />);

    expect(screen.getByTestId('mine-cell')).toBeInTheDocument();
  });

  it('renders an Empty cell', () => {
    const mockGridData = [[0]]; 
    render(<BoardGrid grid={mockGridData} />);

    expect(screen.getByTestId('empty-cell')).toBeInTheDocument();
  });
});
