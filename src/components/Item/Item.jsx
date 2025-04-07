import { useNavigate } from "react-router-dom";
import styles from './Item.module.css';

const Item = ({ producto }) => {

    const navigate = useNavigate();

    return (
        <div className={styles['item-card']} onClick={() => navigate(`/item/${producto.id}`)}>
            <h3>{producto.title}</h3>
            <img src={producto.image} alt={producto.title} width="100px" />
            <p>Precio: ${producto.price}</p>
        </div>
    );
};

export default Item;