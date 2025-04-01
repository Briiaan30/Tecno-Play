import { useFetch } from "../../customHooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { db } from "../../firebase/client.js";
import Loading from "../Loading/Loading.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const { data, loading, error } = useFetch("https://fakestoreapi.com/products");
    const { categoryId } = useParams();
    if (loading) return <Loading loading={loading} />
    if (error) return <h2>Hubo un error</h2>
    if (!data) return null

    // Datos de Firebase
    /* 
    const producRef = doc(db, 'products','017ISkST76UZL51DuJru');
    
        const getProduct = () =>{
            getDoc(producRef).then(snapshot => {
                if(snapshot.exists()){
                    console.log({id:snapshot.id, ...snapshot.data()});
                }
            })
        } 
    */

    /* const productRef = collection(db, 'products')
    const getProducts = async () => {
        const data = await getDocs(productRef);
        const products = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } */

    const filteredData = categoryId
        ? data.filter(prod => prod.category === categoryId)
        : data;

    return (
        <div>
            <h1>{categoryId ? `Categoria: ${categoryId}` : 'Todos los productos'}</h1>
            <ItemList prod={filteredData} />
        </div>
    )
}

export default ItemListContainer; 