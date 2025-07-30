import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import RegistrationPage from './pages/RegistrationPage';

import HomePage from './pages/HomePage';

import DisplayPosts from './components/display/DisplayPosts';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/registration-page" element={<RegistrationPage />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/test/posts" element={<DisplayPosts />} />
            <Route path="/home-page" element={<HomePage />} />
            
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
