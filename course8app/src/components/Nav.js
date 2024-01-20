import '../App.css';
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
            <li><a href="#home">Home</a></li>
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
