import React from 'react';
import { HashRouter as Router, Routes,  Route} from 'react-router-dom';

// components
import Navbar from './components/Navbar.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import LoginForm from './components/LoginForm.js';
import ContactForm from './components/ContactForm.js';

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage.js';
import ExperiencePage from './pages/ExperiencePage.js';
import Four0FourPage from './pages/Four0FourPage.js'
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';

function App() {
  return (
    <>
      <Router >
        <Header/>
        <Navbar />        
        <Routes>
          <Route path="/"  element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/experience" element={<ExperiencePage/>} />
          <Route path="/contact_form" element={<ContactForm/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/contact" element={<ContactForm/>} />
          <Route path="/reset-password:token" element={<ResetPasswordPage/>} />
          <Route path="*" element={<Four0FourPage/>} />
        </Routes>
        
        <Footer/>
      </Router>
    </>
  );
}
export default App;