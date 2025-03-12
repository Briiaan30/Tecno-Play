import "./Item.css";

const Item = ({ producto, navigate }) => {
    return (
        <div className="item-card" onClick={() => navigate(`/item/${producto.id}`)}>
            <h3>{producto.title}</h3>
            <img src={producto.image} alt={producto.title} width="100px" />
            <p>Precio: ${producto.price}</p>
        </div>
    );
};

export default Item;