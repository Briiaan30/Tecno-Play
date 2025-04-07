import Item from "../Item/Item.jsx";
import styles from './ItemList.module.css';

const ItemList = ({ prod, navigate }) => {
    // console.log('Productos en ItemList:',prod)
    return (
        <div className={styles['item-container']}>
            {prod.length > 0 ? (
                prod.map((item) => (
                    <Item key={item.id} producto={item} navigate={navigate} />
                ))
            ) : (
                <p>No hay productos en esta categoría</p>
            )}
        </div>
    );
};

export default ItemList;