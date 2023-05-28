import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Book from './pages/Book';
import About from './pages/About';
import Contact from './pages/Contact';
import BookForm from './pages/BookForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookform" element={<BookForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
//aiuoe
export default App;
