import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSections';
import PopularTopics from './components/PopularTopics';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage'; // Import the BlogPage component
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/blog" element={
            <main>
              <HeroSection />
              <PopularTopics />
            </main>
          } />
          <Route path="/blog/:id" element={<BlogPage />} /> {/* Add route for the BlogPage */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
