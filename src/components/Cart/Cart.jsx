import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContexto.jsx";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client.js";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx"
import styles from "./Cart.module.css";

const Cart = () => {
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: '' })
    const [orderNumber, setOrderNumber] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { cart, totalPrice, clearCart, removeOfCart } = useContext(CartContext)

    const createOrder = () => {
        if (cart.length === 0) {
            alert('El carrito está vacío.')
            return
        }

        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{7,15}$/; // solo números, mínimo 7, máximo 15

        if (!buyer.name || !buyer.email || !buyer.phone) {
            alert('Por favor complete todos los campos.');
            setLoading(false);
            return;
        }

        if (!nameRegex.test(buyer.name)) {
            alert('El nombre solo puede contener letras y espacios.');
            setLoading(false);
            return;
        }

        if (!emailRegex.test(buyer.email)) {
            alert('Ingrese un email válido.');
            setLoading(false);
            return;
        }

        if (!phoneRegex.test(buyer.phone)) {
            alert('El teléfono debe contener solo números (mínimo 7 dígitos).');
            setLoading(false);
            return;
        }


        const order = {
            buyer,
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price * item.quantity
            })),
            total: totalPrice()
        }

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
            .then(({ id }) => {
                clearCart()
                setBuyer({ name: '', email: '', phone: '' })
                setOrderNumber(id)
                setLoading(false)
            })
            .catch((error) => { console.log('Error al crear la orden:', error) })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setBuyer({ ...buyer, [name]: value })
    }

    return (
        <>
            {loading ? (
                <Loading loading={loading} />
            ) : orderNumber ? (
                <>
                    <p className={styles['nroPedido']}>Compra realizada.
                        <br />Tu nro de pedido es: <strong>{orderNumber}</strong>
                    </p>
                    <button className={styles['backHome']} onClick={() => navigate(`/`)}>Volver al inicio</button>
                </>
            ) : (
                <>
                    <div className={styles['cartContainer']}>
                        <h1>
                            Carrito de compras
                        </h1>
                        <div className={styles['cartDetails']}>
                            {cart.length === 0 ? (
                                <p>El carrito está vacío.</p>
                            ) : (
                                <>
                                    <ul className={styles['cartList']}>
                                        {cart.map((item) => (
                                            <li key={item.id} className={styles['cartItem']}>
                                                <img src={item.image} alt={item.name} className={styles['cartImage']} />
                                                <div className={styles['cartInfo']}>
                                                    <h2>{item.title}</h2>
                                                    <p>Cantidad: {item.quantity}</p>
                                                    <p>Precio: ${item.price * item.quantity}</p>
                                                </div>
                                                <button className={styles['removeIdCart']} onClick={() => removeOfCart(item.id)}>Eliminar</button>
                                            </li>
                                        ))}
                                    </ul>
                                    <h2>Total: ${totalPrice()}</h2>
                                    <button onClick={clearCart} className={styles['clearButton']}>Limpiar Carrito</button>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={styles['buyerContainer']}>
                        <h2>Datos del comprador</h2>
                        <input type="text" name="name" placeholder="Nombre" required onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="Email" required onChange={handleInputChange} />
                        <input type="number" name="phone" placeholder="Teléfono" required onChange={handleInputChange} />
                        <button onClick={() => {
                            setLoading(true);
                            createOrder();
                        }}>Finalizar Compra</button>
                    </div>
                </>
            )}
        </>
    )
}

export default Cart;