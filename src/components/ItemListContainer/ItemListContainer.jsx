import { useState } from "react";
import "./ItemListContainer.css";
import { NavLink } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);

    return (
        <>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
            <h1>{greeting}</h1>
        </NavLink>
        <ItemList productos={producto}/>
        </>
    );
}

export default ItemListContainer;