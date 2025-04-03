import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client.js";
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState([]);

    useEffect(() => {
        const getItem = async () => {
            setLoading(true);
            try {
                const productRef = doc(db, 'products', id);
                const data = await getDoc(productRef);
                const item = { id: data.id, ...data.data() };
                setProducto(item)
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally { setLoading(false) }
        }

        getItem();
    }, [])

    if (loading) return <Loading loading={loading} />

    return (
        <div>
            <ItemDetail prod={producto} />
        </div>
    )
}

export default ItemDetailContainer;