import '../App.css';
import React from 'react'
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Bookings from "./Bookings";
import ConfirmedBooking from "./ConfirmedBooking"
import {Route, Routes} from 'react-router-dom'

function Main() {

  const fetchAPI = function(date) {
    let result =
    [
     "17:30",
     "18:30",
     "19:30",
     "20:30"
    ];
     return result;
   };
     const submitAPI = function(formData) {
       return true;
 };

const initializeTimes = {availableTimes:  fetchAPI(new Date())}

function updateTimes(state, date) {
   return {availableTimes: fetchAPI(new Date(date))}
}

const [state, dispatch] = useReducer(updateTimes, initializeTimes);

const navigate = useNavigate();
function submitForm (formData) {
   if (submitAPI(formData)) {
       navigate("/confirmed")
   }
}

  return (
    <>
    <main>
      <Routes>
        <Route path="/bookings" element={<Bookings availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
    </>
  );
}

export default Main;
