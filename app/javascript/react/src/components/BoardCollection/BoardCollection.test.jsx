import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { getAllBoardsByPage } from '../../api/GetMinesweeperBoards';
import BoardCollection from './BoardCollection';
import '@testing-library/jest-dom';

jest.mock('../../api/GetMinesweeperBoards');

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
    ...(jest.requireActual("react-router")),
    useNavigate: () => mockedUsedNavigate
}));

describe('BoardCollection', () => {
  it('renders without crashing', () => {
    render(<BoardCollection/>);
  });

  it('fetches and displays boards on initial render', async () => {
    const mockResponse = {
        boards: [ 
            { id: 1, name: 'Board 1' },
            { id: 2, name: 'Board 2' },],
        total_pages: 1
    }

    getAllBoardsByPage.mockResolvedValueOnce(mockResponse);

    render(<BoardCollection />);

    // Wait for the component to render and display the boards
    await waitFor(() => {
      expect(screen.getByText('Board 1')).toBeInTheDocument();
      expect(screen.getByText('Board 2')).toBeInTheDocument();
    });
  });

  it('displays loading state while fetching boards', async () => {
    getAllBoardsByPage.mockResolvedValueOnce({ boards: [], total_pages: 1 });

    render(<BoardCollection/>);

    expect(screen.getByText('Loading Boards...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading Boards...')).toBeNull();
    });
  });

  it('navigates home on button click', () => {
    render(<BoardCollection />);
    fireEvent.click(screen.getByText('Home'));

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });

  it('changes page on pagination click', async () => {
    const mockResponse = {
        boards: [ 
            { id: 3, name: 'Board 3' },
            { id: 4, name: 'Board 4' }
        ],
        total_pages: 2
    }

    getAllBoardsByPage.mockResolvedValueOnce(mockResponse);

    render(<BoardCollection />);

    await waitFor(() => {
      fireEvent.click(screen.getByText(2));
    });

    expect(getAllBoardsByPage).toHaveBeenCalledWith(2);
  });
});
