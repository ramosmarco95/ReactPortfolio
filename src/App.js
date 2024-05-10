import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import LoginForm from './components/LoginForm.js';
import ContactForm from './components/ContactForm.js';


import { BrowserRouter as Router, Routes,  Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import Four0FourPage from './pages/Four0FourPage.js'





function App() {
  return (
    <div className="App">
      <Router>

        <Header/>
        <Navbar />
        
        <Routes>
          <Route path="/" index element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/contact_form" element={<ContactForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/404" element={<Four0FourPage/>} />
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
