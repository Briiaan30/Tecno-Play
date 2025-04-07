import { useState, useEffect, useContext } from "react";
import { CartContext } from '../../context/CartContexto.jsx'
import styles from './CantidadCarrito.module.css';

const CantidadCarrito = ({ prod }) => {
    const [cantidad, setCantidad] = useState(0);
    const [stock, setStock] = useState(prod.stock); // Inicializa el stock del producto
    const { addToCart } = useContext(CartContext)

    const sumar = () => {
        if (cantidad >= stock) { return } // No agrega mas del stock
        setCantidad(cantidad + 1);
    }

    const restar = () => {
        if (cantidad <= 0) { return } // No resta menos de 0
        setCantidad(cantidad - 1);
    }

    const updateStock = () => {
        setStock(stock - cantidad) // Actualiza el stock al agregar al carrito
    }

    console.log('prod:', prod)
    return (
        <div className={styles['boton']}>
            <button className={styles['botonesMasMenos']} onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button className={styles['botonesMasMenos']} onClick={sumar}>+</button>
            <button className={styles['botonAgregar']} onClick={
                () => {
                    addToCart({ ...prod, quantity: cantidad })
                    updateStock()
                }
            }
            >Agregar al carrito</button>
        </div>
    );
};

export default CantidadCarrito;

// Actualizar el stock cuando se agrega al carrito. Actualizar el firestore