import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Saludar from './components/Saludar.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Saludar nombre="Brian"/>
  </>,
)
