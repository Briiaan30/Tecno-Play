import { useParams } from "react-router-dom";
import { useFetch } from "../../customHooks/useFetch";
import Loading from "../Loading/Loading";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
    if (loading) return <Loading loading={loading}/>

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