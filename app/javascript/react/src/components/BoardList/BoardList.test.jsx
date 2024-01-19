import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { getTenMostRecentBoards } from '../../api/GetMinesweeperBoards';
import BoardList from './BoardList';
import '@testing-library/jest-dom';


jest.mock('../../api/GetMinesweeperBoards');

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
    ...(jest.requireActual("react-router")),
    useNavigate: () => mockedUsedNavigate
}));


describe('BoardList', () => {
  it('renders without crashing', () => {
    render(<BoardList />);
  });

  it('fetches and displays the most recent boards', async () => {
    const mockBoards = [
      { id: 1, name: 'Board 1' },
      { id: 2, name: 'Board 2' },
    ];

    getTenMostRecentBoards.mockResolvedValueOnce(mockBoards);

    const screen = render(<BoardList />);

    await waitFor(() => {
      expect(screen.getByText('Name: Board 1')).toBeInTheDocument();
      expect(screen.getByText('Name: Board 2')).toBeInTheDocument();
    });
  });


  it('navigates to the correct route on board click', async () => {
    const mockBoards = [
        { id: 1, name: 'Board 1' },
        { id: 2, name: 'Board 2' },
    ];
  
    getTenMostRecentBoards.mockResolvedValueOnce(mockBoards);

    const screen = render(<BoardList />);
    
    await waitFor(() => {
        fireEvent.click(screen.getByText('Name: Board 2'));
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/viewBoard/2');
    });
  });
  
  it('displays loading state while fetching data', async () => {
    getTenMostRecentBoards.mockResolvedValueOnce([]);
    
    render(<BoardList />);

    expect(screen.getByText('Loading list...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading list...')).toBeNull();
    });
  });

  it('navigates to the correct route on button click', () => {
    render(<BoardList />);
    fireEvent.click(screen.getByText('View All Generated Boards'));

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/boardCollection');
  });
});