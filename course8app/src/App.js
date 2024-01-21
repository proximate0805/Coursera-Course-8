import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Main />}>Home Page</Route>
      <Route path="/BookingPage" element={<BookingPage />}>Home Page</Route>
    </Routes>
    <Header/>
    <Main/>
    <Footer/>
    </>
  );
}

export default App;
