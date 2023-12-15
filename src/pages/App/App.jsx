import './App.css';
import Navbar from "../../components/Navbar/Navbar"
import {Routes, Route} from "react-router-dom"
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

function App() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="App relative">
       <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} /> 
       <Routes>
          <Route path='/' element={<HomePage isMobileMenuOpen={isMobileMenuOpen} />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/sweeper' element={<SweeperProjectPage />} />
          <Route path='/projects/cardio' element={<CardioProjectPage />} />
          <Route path='/projects/thedraft' element={<TheDraftProjectPage />} />
          <Route path='/projects/lowkey' element={<LowkeyProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFoundPage />} />
       </Routes>
       <Footer /> 
       <Analytics /> 
    </main>
  );
}

export default App;
