import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/registration-page" element={<RegistrationPage />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
