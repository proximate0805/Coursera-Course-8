import '../App.css';
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSubmit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
      <form onSubmit={handleSubmit}>
            <div>
              <label aria-label="Date" htmlFor="book-date">Choose Date:</label>
              <input id="res-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
            </div>
            <div>
              <label aria-label="Time" htmlFor="book-time">Choose Time:</label>
              <select id="res-time" value={times} onChange={(e) => setTimes(e.target.value)} required>
                <option data-testid="select-option" value="">Select a Time</option>
               {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
              </select>
            </div>
            <div>
              <label aria-label="Guests" htmlFor="res-guests">Number of Guests:</label>
              <input id="guests" min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
            </div>
            <div>
              <label aria-label="Occasion" htmlFor="res-occasion">Occasion:</label>
              <select id="occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                <option value="">Select an Option</option>
                <option>Casual</option>
                <option>Anniversary</option>
                <option>Birthday</option>
              </select>
            </div>
            <div>
              <Link to="/confirmed">
              <input id="submit" aria-label="On Click" type={"submit"} value={"Make Your Reservation"}></input>
              </Link>
            </div>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;