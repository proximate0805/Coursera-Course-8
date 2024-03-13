import '../App.css';
import restauranfood from "../images/restauranfood.jpg"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <header>
          <div className="hero-container">
            <img src={restauranfood}></img>
              <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <Link to="/bookings">
                <button>Reserve a Table</button>
              </Link>
        </div>
    </header>
    </>
  );
}

export default Header;
