import '../App.css';
import Bruschetta from "../images/bruschetta.png"
import Greeksalad from "../images/greek salad.jpg"
import Lemondessert from "../images/lemon dessert.jpg"
import Person from "../images/person.png"
import MarioAdrianA from "../images/Mario and Adrian A.jpg"
import MarioAdrianB from "../images/Mario and Adrian b.jpg"

function Main() {
  return (
    <>
    <section className="specials">
      <h1>This week's specials!</h1>
      <button>Reserve a Table</button>
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
    <section className="reviews">
      <h1>Testimonials</h1>
      <div class="allreviews">
        <div class="reviewcard">
            <h3>★★★★★</h3>
            <img src={Person}></img>
            <h2>Greek Salad</h2>
            <p>The famous </p>
          </div>
          <div class="reviewcard">
            <h3>★★★★☆</h3>
            <img src={Person}></img>
            <h2>Greek Salad</h2>
            <p>The famous </p>
          </div>
          <div class="reviewcard">
            <h3>★★★★☆</h3>
            <img src={Person}></img>
            <h2>Greek Salad</h2>
            <p>The famous </p>
          </div>
          <div class="reviewcard">
            <h3>★★★★☆</h3>
            <img src={Person}></img>
            <h2>Greek Salad</h2>
            <p>The famous </p>
          </div>
      </div>
    </section>
    <article className="about">
        <div className="about-container-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
          <img className="about-image1" src={MarioAdrianB}/>
          <img className="about-image2" src={MarioAdrianA}/>
    </article>
    </>
  );
}

export default Main;
