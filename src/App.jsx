import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import CantidadCarrito from './components/CantidadCarrito/CantidadCarrito.jsx'
// import ItemCount from './components/ItemCount/ItemCount.jsx'
import ComponentTests from './components/ComponentTests/ComponentTests.jsx'


function App() {
  
  const handleAddToCart = (count) => {s
    console.log(`Agregados al carrito: ${count}`)
  }

  return (
    <StrictMode>
    <BrowserRouter>
      <ResponsiveAppBar />
      {/* <ItemCount stock={100} initial={0} onAdd={handleAddToCart}/> */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CantidadCarrito />} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
  )
}

export default App;