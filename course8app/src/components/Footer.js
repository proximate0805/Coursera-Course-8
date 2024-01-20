import '../App.css';
import Logo from "../images/Logo.png"

function Footer() {
  return (
    <>
    <footer>
        <img className="footer-logo" src={Logo}></img>
        <div className="doormat-navigation">
            <h3>Doormat Navigation</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#orderonline">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </div>
        <div className="contact">
            <h3>Contact</h3>
            <ul>
                <li><a href="#address">Address</a></li>
                <li><a href="#phonenumber">Phone Number</a></li>
                <li><a href="#email">Email</a></li>
            </ul>
        </div>
        <div className="social-media-links">
            <h3>Social Media</h3>
            <ul>
                <li><a href="#address">Address</a></li>
                <li><a href="#phonenumber">Phone Number</a></li>
                <li><a href="#email">Email</a></li>
            </ul>
        </div>
    </footer>
    </>
  );
}

export default Footer;
