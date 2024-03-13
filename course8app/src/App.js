import './App.css';
import Main from "./components/Main"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Specials from "./components/Specials"
import Reviews from "./components/Reviews"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Nav />
    <Header />
    <Main />
    <Specials />
    <Reviews />
    <About />
    <Footer />
    </>
  );
}

export default App;
