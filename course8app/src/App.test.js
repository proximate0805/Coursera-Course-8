import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
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

test('Form validation testing - Date', () =>{
  const handleSubmit = jest.fn()
  render(<BookingForm handleSubmit={handleSubmit}/>)

  const dateInput = screen.getbyLabelText(/Choose Date:/)
  fireEvent.change(dateInput, {target: {value: "mm-dd-yyyy"}})

  const submitButton = screen.getByRole("button")
  fireEvent.click(submitButton)

  expect(handleSubmit).not.toHaveBeenCalled()
  expect(submitButton).toHaveAttribute("disabled")
})

test('Form validation testing - Date, passed', () =>{
  const handleSubmit = jest.fn()
  render(<BookingForm handleSubmit={handleSubmit}/>)

  const dateInput = screen.getbyLabelText(/Choose Date:/)
  fireEvent.change(dateInput, {target: {value: "20-14-2024"}})

  const submitButton = screen.getByRole("button")
  fireEvent.click(submitButton)

  expect(handleSubmit).toHaveBeenCalled()
})


test('Form validation testing - Time', () =>{
  const handleSubmit = jest.fn()
  render(<BookingForm handleSubmit={handleSubmit}/>)

  const timeInput = screen.getByTestId("select-option")
  fireEvent.change(timeInput, {target: {value: "Select a Time"}})

  const submitButton = screen.getByRole("button")
  fireEvent.click(submitButton)

  expect(handleSubmit).not.toHaveBeenCalled()
  expect(submitButton).toHaveAttribute("disabled")
})

test('Form validation testing - Guests', () =>{
  const handleSubmit = jest.fn()
  render(<BookingForm handleSubmit={handleSubmit}/>)

  const guesteInput = screen.getbyLabelText(/Number of Guests:/)
  fireEvent.change(guestInput, {target: {value: "0"}})

  const submitButton = screen.getByRole("button")
  fireEvent.click(submitButton)

  expect(handleSubmit).not.toHaveBeenCalled()
  expect(submitButton).toHaveAttribute("disabled")
})