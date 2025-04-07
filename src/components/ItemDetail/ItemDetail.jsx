import { useState, useContext } from "react";
import CantidadCarrito from "../CantidadCarrito/CantidadCarrito.jsx";
import styles from './ItemDetail.module.css';

const ItemDetail = ({ prod }) => {
    const [producto, setProducto] = useState(prod);


    return (
        <div className={styles['itemDetail']}>
            <h1>{producto.title}</h1>
            <img src={producto.image} alt={producto.title} />
            <p>{producto.description}</p>
            <p className={styles['priceClass']}>${producto.price} BITCOINS</p>
            <CantidadCarrito prod={prod}/>
        </div>
    )
}

export default ItemDetail;