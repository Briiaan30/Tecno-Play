import styles from "./Cart.module.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContexto.jsx";

const Cart = () => {
    const { cart, totalPrice, clearCart } = useContext(CartContext)
    // console.log('cartContext:', cartContext)
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })
    console.log('buyer:', buyer)

    const createOrder = () => {
        const order = {
            buyer: buyer,
            items: cart.map(item => ({
                id: item.id,
                title: item.name,
                price: item.price * item.quantity
            })),
            total: totalPrice()
        }
        // console.log('order:', order)
    }

    return (
        <>
            <div className={styles['cartContainer']}>
                <h1>
                    Carrito de compras
                </h1>
                <div className={styles['cartDetails']}>
                    {cart.length === 0 ? (
                        <p>El carrito está vacío.</p>
                    ) : (
                        <div>
                            <ul className={styles['cartList']}>
                                {cart.map((item) => (
                                    <li key={item.id} className={styles['cartItem']}>
                                        <img src={item.image} alt={item.name} className={styles['cartImage']} />
                                        <div className={styles['cartInfo']}>
                                            <h2>{item.name}</h2>
                                            <p>Cantidad: {item.quantity}</p>
                                            <p>Precio: ${item.price}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <h2>Total: ${totalPrice()}</h2>
                            <button onClick={clearCart} className={styles['clearButton']}>Limpiar Carrito</button>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles['buyerContainer']}>
                <h2>Datos del comprador</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setBuyer({
                        name: e.target.name.value,
                        email: e.target.email.value,
                        phone: e.target.phone.value
                    })
                }}>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="number" name="phone" placeholder="Teléfono" required />
                    <button type="submit" onClick={createOrder()}>Finalizar Compra</button>
                </form>
            </div>
        </>

        //<div className={styles.cartContainer}>
        //     <h1>Carrito de Compras</h1>
        //     <CartContext.Consumer>
        //         {({ cart, totalPrice, clearCart }) => (
        //             
        //         )}
        //     </CartContext.Consumer>
        // </div> 
    )
}

export default Cart;