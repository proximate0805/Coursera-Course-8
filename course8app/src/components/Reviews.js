import '../App.css';
import Person from "../images/person.png"

function Reviews() {
  return (
    <>
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
    </>
  );
}

export default Reviews;