import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResponsiveAppBar from './components/Navbar/Navbar.jsx'
import CantidadCarrito from './components/CantidadCarrito/CantidadCarrito.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <ResponsiveAppBar />
    <CantidadCarrito />  
  </>
)
