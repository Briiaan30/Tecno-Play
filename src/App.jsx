import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartComponentContext } from './context/CartContexto.jsx'
import ResponsiveAppBar from './components/Navbarr/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import Cart from './components/Cart/Cart.jsx'

function App() {
  return (
    <StrictMode>
      <CartComponentContext>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartComponentContext>
    </StrictMode>
  )
}

export default App;