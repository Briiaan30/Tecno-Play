import { useFetch } from "../../customHooks/useFetch";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
    const navigate = useNavigate();
    const { categoryId } = useParams();
    if (loading) { return <h1>Cargando...</h1> }
    if (error) { return <h2>Hubo un error</h2> }
    if (categoryId) {
        return (
            <>
                {data?.map((prod) => {
                    if (prod.category === categoryId) {
                        return (<div key={prod.id} style={{cursor:'pointer'}} onClick={() => navigate(`/item/${prod.id}`)} className='item' >
                            {prod.title}
                        </div>)
                    }
                })}
            </>
        )
    }
    // console.log(data)
    return (
        <>
            <h1>Productos cargados</h1>
            <h2>Elija una categoria</h2>
            {/* {data?.map((prod) => { if (prod.category === "electronics"){ return(<div key={prod.id}>{prod.title}</div>)}})} */}
            {/* <div key={prod.id}>{prod.title}</div> */}
            {data?.map((prod) => { <ItemList itemCod={prod} /> })}
        </>
    );
}

export default ItemListContainer; 