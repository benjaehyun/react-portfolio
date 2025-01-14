import './App.css';
import Navbar from "../../components/Navbar/Navbar"
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import SweeperProjectPage from '../SweeperProjectPage/SweeperProjectPage';
import CardioProjectPage from '../CardioProjectPage/CardioProjectPage';
import TheDraftProjectPage from '../TheDraftProjectPage/TheDraftProjectPage';
import LowkeyProjectPage from '../LowkeyProjectPage/LowkeyProjectPage';
import HomePage from '../HomePage/HomePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Footer from '../../components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import React, { useState } from 'react';
import ScrollToTop from '../../utilities/ScrollToTop';
import LunchbreakProjectPage from '../LunchbreakProjectPage/LunchbreakProjectPage';
import BrewistaProjectPage from '../BrewistaProjectPage/BrewistaProjectPage';
import { NavigationProvider } from '../../context/NavigationContext';
import Navigation from '../../components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavigationProvider>
      <main className="App relative">
        <ScrollToTop />
        {/* <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />  */}
        <Navigation />
        <Routes>
            <Route path='/' element={<HomePage isMobileMenuOpen={isMobileMenuOpen} />} />
            <Route path='/projects' element={<ProjectsPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/projects/sweeper' element={<SweeperProjectPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/projects/cardio' element={<CardioProjectPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/projects/thedraft' element={<TheDraftProjectPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/projects/lowkey' element={<LowkeyProjectPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/projects/lunchbreak' element={<LunchbreakProjectPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/projects/brewista' element={<BrewistaProjectPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/about' element={<AboutPage isMobileMenuOpen={isMobileMenuOpen}/>} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer /> 
        <Analytics /> 
      </main>
    </NavigationProvider>
  );
}

export default App;
