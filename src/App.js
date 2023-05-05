// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';



function App() {
  return (
    <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
               
            }}
        >  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
      
    </div> 
    
  );
}

export default App;
