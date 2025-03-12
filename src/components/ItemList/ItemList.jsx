import Item from "../Item/Item.jsx";

const ItemList = ({ prod, navigate }) => {
    console.log(prod)
    return (
        <div className="item-container">
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