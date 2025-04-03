import { useState, useEffect, useContext } from "react";
import { CartContext } from '../../context/CartContexto.jsx'
import styles from './CantidadCarrito.module.css';

const CantidadCarrito = () => {
    const [cantidad, setCantidad] = useState(0);

    const sumar = () => {
        if(cantidad >= 10){ // No agrega mas del stock
            alert('No puedes sumar más de 10 unidades');
            return;
        }
        setCantidad(cantidad + 1);
    }

    const restar = () => {
        if(cantidad <= 0){
            alert('No puedes restar más de 0 unidades');
            return;
        }
        setCantidad(cantidad - 1);
    }

    return (
        <div className={styles['boton']}>
            <button onClick={sumar}>+</button>
            <p>Cantidad: {cantidad}</p>
            <button onClick={restar}>-</button>
        </div>
    );
};

export default CantidadCarrito;