import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';

import DisplayPosts from './components/display/DisplayPosts';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/registration-page" element={<RegistrationPage />} />
            <Route path="/test/posts" element={<DisplayPosts /> } />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
