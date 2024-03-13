import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking(){
    return (
        <>
            <div className="confirmedbooking">
                <h1>Booking Confirmed!</h1>
                <Link to="/">
                    <button>Go back</button>
                </Link>
            </div>
        </>
    )
}

export default ConfirmedBooking;