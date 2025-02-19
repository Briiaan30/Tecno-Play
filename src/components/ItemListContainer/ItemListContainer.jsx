import { useState } from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    return (
        <div >
            <h1>{greeting}</h1>
        </div>
    );
}

export default ItemListContainer;