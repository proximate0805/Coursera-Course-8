import '../App.css';
import MarioAdrianA from "../images/Mario and Adrian A.jpg"
import MarioAdrianB from "../images/Mario and Adrian b.jpg"

function About() {
  return (
    <>
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

export default About;