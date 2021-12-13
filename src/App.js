
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Shares/Navigation/Navigation';
import ErrorPage from './Pages/Error/ErrorPage';
import Footer from './Pages/Shares/Footer/Footer';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import SingleProduct from './Pages/Projects/SingleProduct';
import Contact from './Pages/Contacts/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact />} />


          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
