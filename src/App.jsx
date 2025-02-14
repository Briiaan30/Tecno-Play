import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResponsiveAppBar from './components/navbar/Navbar.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <ResponsiveAppBar />
  </>
)
