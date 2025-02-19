import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResponsiveAppBar from './components/Navbar/Navbar.jsx'
import CantidadCarrito from './components/CantidadCarrito/CantidadCarrito.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveAppBar />
    {/* <CantidadCarrito /> */}
    <ItemListContainer greeting="Bienvenidos a la tienda" />
  </StrictMode>
)
