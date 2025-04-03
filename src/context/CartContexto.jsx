import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartComponentContext = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        const foundItem = cart.find((prod) => prod.id === item.id)
        if (foundItem) {
            setCart(
                cart.map((prod) =>
                    prod.id === item.id ? { ...foundItem, quantity: foundItem.quantity + item.quantity } : prod
                )
            )
        } else {
            setCart([...cart, { ...item, quantity: item.quantity }])
        }
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}