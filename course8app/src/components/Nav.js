import '../App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Logo from "../images/Logo.png"

function Nav() {
  return (
    <>
    <nav>
      <a href="/">
        <img src={Logo} alt="logo"/>
      </a>

      <div className="navbar">
        <ul>
            <li><Link to="#home">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderonline">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
        </div>
    </nav>

    </>
  );
}

export default Nav;
