import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { getBoard } from "../../api/GetMinesweeperBoards";
import Board from './Board';
import '@testing-library/jest-dom';

jest.mock('../../api/GetMinesweeperBoards');

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
    ...(jest.requireActual("react-router")),
    useNavigate: () => mockedUsedNavigate
}));

describe('Board', () => {
  it('renders without crashing', () => {
    render(<Board/>);
  });

  it('fetches and displays boards on initial render', async () => {
    const mockBoard = { id: 1, name: 'Test Board', email: 'test@example.com', grid: [[0, 0], [0, 1]] };

    getBoard.mockResolvedValueOnce(mockBoard);

    render(<Board id={1}/>);

    await waitFor(() => {
        expect(screen.getByText('Minesweeper: Test Board')).toBeInTheDocument();
        expect(screen.getByText('Created by: test@example.com')).toBeInTheDocument();
    });
  });

  it('displays loading state while fetching board', async () => {
    getBoard.mockResolvedValueOnce({});

    render(<Board/>);

    expect(screen.getByText('Loading Board...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading Board...')).toBeNull();
    });
  });

  it('navigates home on button click', () => {
    render(<Board/>);
    fireEvent.click(screen.getByText('Home'));

    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });
});
