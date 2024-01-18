import './App.css';

function Footer() {
  return (
    <>
    <footer>
        <div className="doormat-navigation">
            <ul>
                <li><a href="#home"></a></li>
                <li><a href="#about"></a></li>
                <li><a href="#menu"></a></li>
                <li><a href="#reservations"></a></li>
                <li><a href="#orderonline"></a></li>
                <li><a href="#login"></a></li>
            </ul>
        </div>
        <div className="contact">
            <ul>
                <li><a href="#address"></a></li>
                <li><a href="#phonenumber"></a></li>
                <li><a href="#email"></a></li>
            </ul>
        </div>
        <div className="social-media-links">
            <ul>
                <li><a href="#address"></a></li>
                <li><a href="#phonenumber"></a></li>
                <li><a href="#email"></a></li>
            </ul>
        </div>
    </footer>
    </>
  );
}

export default Footer;
