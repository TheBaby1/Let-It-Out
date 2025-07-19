import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LandingPage from './pages/LandingPage';
import LandingPageLayout from './layouts/LandingPageLayout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      <LandingPageLayout />
    </>
  )
}

export default App
