import { useState } from "react";
import styles from './ItemCount.module.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)
    const [stockDisponible, setStockDisponible] = useState(stock)
    const [stockInicial, setStockInicial] = useState(stock)

    const sumar = () => {
        if (count < stockInicial) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        if (stockDisponible >= count) {
            setStockDisponible(stockDisponible - count)
            onAdd(count)
        } else { alert('No hay stock suficiente') }
    }

    const onChangeInput = (nro) => {
        if (isNaN(nro) || nro < 1) {
            setCount(1);
        } else if (nro > stockDisponible) {
            setCount(stockDisponible);
        } else {
            setCount(nro);
        }
    };

    return (
        <div className={styles['ItemCount']}>
            <button onClick={sumar}>+</button>
            <input type='number' onChange={(event => onChangeInput(parseInt(event.target.value)))} value={count} />
            <button onClick={restar}>-</button>
            <div>
                <button onClick={agregar}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;