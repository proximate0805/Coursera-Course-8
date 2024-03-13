import '../App.css';
import { Link } from 'react-router-dom';
import Bruschetta from "../images/bruschetta.png"
import Greeksalad from "../images/greek salad.jpg"
import Lemondessert from "../images/lemon dessert.jpg"

function Specials() {
  return (
    <>
    <section className="specials">
      <h1>This week's specials!</h1>
      <Link to="/bookings">
        <button>Reserve a Table</button>
      </Link>
      <div class="allcards">
        <div class="card">
          <img src={Greeksalad}></img>
          <h2>Greek Salad</h2>
          <div className="price1">
          <h3>$12.99</h3>
          </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        </div>
        <div class="card">
          <img src={Bruschetta}></img>
          <h2>Bruschetta</h2>
          <div className="price2">
          <h3>$10.99</h3>
          </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        </div>
        <div class="card">
          <img src={Lemondessert}></img>
          <h2>Lemon Dessert</h2>
          <div className="price3">
          <h3>$9.99</h3>
          </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        </div>
      </div>
      </section>
    </>
  );
}

export default Specials;