import './App.css';
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import SweeperProjectPage from '../SweeperProjectPage/SweeperProjectPage';
import CardioPage from '../CardioPage/CardioPage';
import TheDraftPage from '../TheDraftPage/TheDraftPage';
import LowkeyPage from '../LowkeyPage/LowkeyPage';
import HomePage from '../HomePage/HomePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Footer from '../../components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';
import React, { useState } from 'react';
import ScrollToTop from '../../utilities/ScrollToTop';
import LunchbreakPage from '../LunchbreakPage/LunchbreakPage';
import BrewistaPage from '../BrewistaPage/BrewistaPage';
import SymphonyPage from '../SymphonyPage/SymphonyPage';
import { NavigationProvider } from '../../context/NavigationContext';
import Navigation from '../../components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import GivelyPage from '../GivelyPage/GivelyPage';
import PomodoroPage from '../PomodoroPage/PomodoroPage';

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
            <Route path='/projects/cardio' element={<CardioPage />} />
            <Route path='/projects/thedraft' element={<TheDraftPage />} />
            <Route path='/projects/lowkey' element={<LowkeyPage />} />
            <Route path='/projects/lunchbreak' element={<LunchbreakPage />} />
            <Route path='/projects/brewista' element={<BrewistaPage />} />
            <Route path='/projects/symphony' element={<SymphonyPage />} />
            <Route path='/projects/gively' element={<GivelyPage />} />
            <Route path='/projects/pomodoro' element={<PomodoroPage />} />
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
