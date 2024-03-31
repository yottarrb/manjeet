
import './App.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import Navbar from './Navbar';
import React, { useState } from 'react'; // Import useState from react
import ContactForm from './ContactForm'; // Import ContactForm component
import Login from './Login';

function App() {

  const [showContactForm, setShowContactForm] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [showLoginContent, setShowLoginContent] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
    setShowMainContent(false); // Hide MainContent on Contact click
    setShowLoginContent(false); // Hide LoginContent on Contact click
  };

  const handleHomeClick = () => {
    setShowMainContent(true); // Show MainContent on Home click
    setShowContactForm(false); // Hide ContactForm on Home click
    setShowLoginContent(false); // Hide LoginContent on Home click
  };

  const handleLoginClick = () => {
    setShowLoginContent(true); // Show LoginContent on Login click
    setShowContactForm(false); // Hide ContactForm on Login click
    setShowMainContent(false); // Hide MainContent on Login click
  };

  return (
    <div className="App">
      
      <Navbar onContactClick={handleContactClick} onHomeClick={handleHomeClick} onLoginClick={handleLoginClick} />
      <Header />
      {showContactForm && <ContactForm />}
      {showMainContent && <MainContent />} {/* Render MainContent component */}
      {showLoginContent && <Login />} {/* Render login content */}
      
      <Footer />
    </div>
  );
}

export default App;
