import './ItemDetailsContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from '../../firebase/firebase.js';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([]);
    const {proid} = useParams()
    useEffect(() => {
        getProduct(proid)
        .then(prod=> setItem(prod))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );
}


