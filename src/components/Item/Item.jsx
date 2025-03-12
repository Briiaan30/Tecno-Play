import { useEffect, useState } from "react";
import "./Item.css";
import { NavLink, useNavigate } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";

const Item = ({item}) => {


    return(
        <>
        <div className="item">
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title}/>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <NavLink to={`/item/${item.id}`}>Ver detalle</NavLink>
        </div>
        </>
    )
}

export default Item;