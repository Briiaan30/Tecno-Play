import { useFetch } from "../../customHooks/useFetch";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
    const navigate = useNavigate();
    const { categoryId } = useParams();
    if (loading) return <h1>Cargando...</h1>
    if (error) return <h2>Hubo un error</h2>
    if (!data) return null

    const filteredData = categoryId
        ? data.filter(prod => prod.category === categoryId)
        : data;

    return (
        <div>
            <h1>{categoryId ? `Categoria: ${categoryId}` : 'Todos los productos'}</h1>
            <ItemList prod={filteredData} navigate={navigate} />
        </div>
    )
}

export default ItemListContainer; 