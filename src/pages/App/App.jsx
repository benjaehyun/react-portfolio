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
import Footer from '../../components/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <main className="App relative">
       <Navbar /> 
       <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/sweeper' element={<SweeperProjectPage />} />
          <Route path='/projects/cardio' element={<CardioProjectPage />} />
          <Route path='/projects/thedraft' element={<TheDraftProjectPage />} />
          <Route path='/projects/lowkey' element={<LowkeyProjectPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
       </Routes>
       <Footer /> 
       <Analytics /> 
    </main>
  );
}

export default App;
