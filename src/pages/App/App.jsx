import './App.css';
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


  return (
    <NavigationProvider>
      <main className="App relative">
        <ScrollToTop />
        <Navigation />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/projects/sweeper' element={<SweeperProjectPage />} />
            <Route path='/projects/cardio' element={<CardioProjectPage />} />
            <Route path='/projects/thedraft' element={<TheDraftProjectPage />} />
            <Route path='/projects/lowkey' element={<LowkeyProjectPage />} />
            <Route path='/projects/lunchbreak' element={<LunchbreakProjectPage />} />
            <Route path='/projects/brewista' element={<BrewistaProjectPage />} />
            <Route path='/about' element={<AboutPage />} />
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
