import React from 'react';
import { screen, render, fireEvent, waitFor, getByRole } from '@testing-library/react';
import BoardGeneratorForm from './BoardGeneratorForm';
import '@testing-library/jest-dom'

const mockedUsedNavigate = jest.fn();

jest.mock("react-router", () => ({
  ...(jest.requireActual("react-router")),
  useNavigate: () => mockedUsedNavigate
}));

describe('BoardGeneratorForm', () => {
  it('should update validity correctly', () => {
    
  });

  it('should check number of mines correctly', () => {
    
  });

  it('should check dimensions correctly', () => {
    const { getAllByRole, getByLabelText } = render(<BoardGeneratorForm />);
    console.log(getAllByRole)
    console.log(getByLabelText)
    const testButton = screen.getByRole('button', { name: /Generate Board/i })

    fireEvent.change(getByLabelText('Email Address'), 'Test@email.com');
    fireEvent.change(getByLabelText('Board Name'), 'Test Baord');
    fireEvent.change(getByLabelText('Board Height (Max 30)'), '5');
    fireEvent.change(getByLabelText('Board Width (Max 30)'), '5');
    fireEvent.change(getByLabelText('Number of Mines'), '30');

    expect(testButton).toBeDisabled()
  });
});
