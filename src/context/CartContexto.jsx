import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        const foundItem = cart.find((prod) => prod.id === item.id)
        if (foundItem) {
            setCart(cart.map((prod) =>
                prod.id === item.id
                    ? { ...foundItem, quantity: foundItem.quantity + item.quantity, stock: item.stock - item.quantity }
                    : prod
            ))
        } else {
            setCart([...cart, { ...item, quantity: item.quantity }])
        }
    }
    
    const removeOfCart = (id) =>{
        const filteredCart = cart.filter((item) => item.id !== id)
        setCart(filteredCart)
    }

    const clearCart = () => {
        setCart([])
    }

    const countCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, countCart, removeOfCart, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}