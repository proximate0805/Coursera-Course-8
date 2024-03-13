import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import Main from './components/Main';

test('Initialize/Update Times', () => {
  render(<BrowserRouter><BookingForm /></BrowserRouter>);
  const reserveButton = screen.getByText("Choose");
  fireEvent.click(reserveButton);
})