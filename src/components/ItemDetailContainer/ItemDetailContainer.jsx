import { useParams } from "react-router-dom";
import { useFetch } from "../../customHooks/useFetch";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
    if (loading) {
        return <h1>Cargando...</h1>
    }

    return (
        <div className="itemDetail">
            <h1>{data.title}</h1>
            <img src={data.image} alt={data.title} />
            <p>{data.description}</p>
            <p className="priceClass">${data.price} BITCOINS</p>
        </div>
    )
}

export default ItemDetailContainer;