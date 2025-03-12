import { useState, useEffect } from "react";
import Item from "../Item/Item.jsx";

const ItemList = ({ prod }) => {

    console.log('consoleLog desde itemList:',prod)

    return (
        <>
        <h1>hola desde itemlist</h1>
            {prod.map((item) => {
                <Item key={prod.id} producto={item} />
            })}
        </>
    )
}

export default ItemList;