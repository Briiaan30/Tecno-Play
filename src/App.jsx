import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResponsiveAppBar from './components/Navbar/Navbar.jsx'
import CantidadCarrito from './components/CantidadCarrito/CantidadCarrito.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
// import ComponentTests from './components/ComponentTests/ComponentTests.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from './components/ItemCount/ItemCount.jsx'

function App() {
  
  const handleAddToCart = (count) => {
    console.log(`Agregados al carrito: ${count}`)
  }

  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      {/* <ItemCount stock={100} initial={0} onAdd={handleAddToCart}/> */}
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a la tienda" />} />
        <Route path="/cart" element={<CantidadCarrito />} />
        {/* <Route path="/cart" element={<ComponentTests />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;