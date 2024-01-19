import React from 'react';
import { screen, render, fireEvent, waitFor, getByRole } from '@testing-library/react';
import { createBoard } from '../../api/MinesweeperCreate';
import BoardGeneratorForm from './BoardGeneratorForm';
import '@testing-library/jest-dom'

const mockedUsedNavigate = jest.fn();

jest.mock('../../api/MinesweeperCreate'); // Mock the createBoard function

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router")),
  useNavigate: () => mockedUsedNavigate
}));

describe('BoardGeneratorForm', () => {
  it('email address input is missing, should disable button', () => {
    const screen = render(<BoardGeneratorForm />);
    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: 'Test Board' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 25 } });
    expect(testButton).toBeDisabled()
  });

  it('board name input is missing, should disable button', () => {
    const screen = render(<BoardGeneratorForm />);
    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'Test@email.com' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 25 } });
    expect(testButton).toBeDisabled()
  });

  it('board height input is missing, should disable button', () => {
    const screen = render(<BoardGeneratorForm />);
    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: 'Test Board' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 0 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 25 } });
    expect(testButton).toBeDisabled()
  });

  it('board width input is missing, should disable button', () => {
    const screen = render(<BoardGeneratorForm />);
    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: 'Test Board' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 0 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 25 } });
    expect(testButton).toBeDisabled()
  });

  it('board width input is missing, should disable button', () => {
    const screen = render(<BoardGeneratorForm />);
    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: 'Test Board' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 0 } });
    expect(testButton).toBeDisabled()
  });


  it('should check dimensions correctly', () => {
    const screen = render(<BoardGeneratorForm />);
    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'Test@email.com' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: 'Test Board' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 25 } });
    expect(testButton).not.toBeDisabled()
  });

  it('should check dimensions and if incorrect, disable button', () => {
    const screen = render(<BoardGeneratorForm />);
    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'Test@email.com' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: 'Test Board' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 30 } });
    expect(testButton).toBeDisabled()
  });


  test('submitting the form calls createBoard and navigates', async () => {
    const screen = render(<BoardGeneratorForm />);

    const testButton = screen.getByRole('button', { name: /Generate Board/i })
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'Test@email.com' } });
    fireEvent.change(screen.getByLabelText(/Board Name/i), { target: { value: 'Test Board' } });
    fireEvent.change(screen.getByLabelText(/Board Height \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Board Width \(Max 30\)/i), { target: { value: 5 } });
    fireEvent.change(screen.getByLabelText(/Number of Mines/i), { target: { value: 25 } });
  
    expect(testButton).not.toBeDisabled()
  
    createBoard.mockResolvedValueOnce({ id: '123' });
  
    fireEvent.click(testButton);
  
    await Promise.resolve();
  
    expect(createBoard).toHaveBeenCalledWith({
      email: 'Test@email.com',
      name: 'Test Board',
      height: "5",
      width: "5",
      numberOfMines: "25",
    });
  
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/viewBoard/123');
  });
});
