import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContexto.jsx'
import styles from './ItemDetail.module.css';
import CantidadCarrito from "../CantidadCarrito/CantidadCarrito.jsx";

const ItemDetail = ({ prod }) => {
    const [producto, setProducto] = useState(prod);
    const { addToCart } = useContext(CartContext)


    return (
        <div className={styles['itemDetail']}>
            <h1>{producto.title}</h1>
            <img src={producto.image} alt={producto.title} />
            <p>{producto.description}</p>
            <p className={styles['priceClass']}>${producto.price} BITCOINS</p>
            <CantidadCarrito />
        </div>
    )
}

export default ItemDetail;