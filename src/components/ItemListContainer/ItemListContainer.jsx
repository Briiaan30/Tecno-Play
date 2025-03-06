import { useState } from "react";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    return (
        <Link to="/cart">
            <h1>{greeting}</h1>
        </Link>
    );
}

export default ItemListContainer;