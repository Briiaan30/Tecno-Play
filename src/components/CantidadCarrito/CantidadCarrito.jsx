import { useState, useEffect } from "react";
import './CantidadCarrito.css'

const CantidadCarrito = () => {
    const [cantidad, setCantidad] = useState(0);

    const sumar = () => {
        setCantidad(cantidad + 1);
    }

    const restar = () => {
        setCantidad(cantidad - 1);
    }

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <p>Cantidad: {cantidad}</p>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </div>
    );
};

export default CantidadCarrito;