import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { query, getDocs, collection, where } from "firebase/firestore";
import { db } from "../../firebase/client.js";
import { CartContext } from "../../context/CartContexto.jsx";
import Loading from "../Loading/Loading.jsx";
import ItemList from "../ItemList/ItemList.jsx";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();
    const { cartContext } = useContext(CartContext);
    console.log('contexto',cartContext)
    // console.log("categoryId:", categoryId);
    // console.log("categorias:", categorias);

    useEffect(() => {
        const productRef = categoryId
            ? query(collection(db, "products"), where("categoryId", "==", parseInt(categoryId)))
            : collection(db, "products");

        const getProduct = async () => {
            setLoading(true);
            try {
                const data = await getDocs(productRef);
                const productsList = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setProducts(productsList);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            } finally { setLoading(false); }
        };
        getProduct();

        const getCategory = async () => {
            setLoading(true);
            try {
                const data = await getDocs(collection(db, "categorias"));
                const categoriesList = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setCategorias(categoriesList);
            } catch (error) {
                console.error("Error al obtener categorias:", error);
            } finally { setLoading(false) }
        }

        getCategory();
    }, [categoryId]); // 🔥 Se ejecuta cada vez que `categoryId` cambia

    if (loading) return <Loading loading={loading} />;
    if (!products.length) return <h2>No hay productos disponibles</h2>;

    const catElegida = categorias.find((cat) => cat.id === parseInt(categoryId));

    return (
        <div>
            <h1>{categoryId ? `Categoría: ${catElegida.name}` : "Todos los productos"}</h1>
            <ItemList prod={products} />
        </div>
    );
};


export default ItemListContainer; 
