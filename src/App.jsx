import React from 'react';
import { HashRouter as Router, Routes,  Route} from 'react-router-dom';

// components
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import LoginForm from './components/LoginForm.jsx';
import ContactForm from './components/ContactForm.jsx';

// pages
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import Four0FourPage from './pages/Four0FourPage.jsx'
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