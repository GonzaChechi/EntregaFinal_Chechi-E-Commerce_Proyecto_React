import './ItemDetailsContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from '../ItemDetail/ItemDetail';
export const ItemDetailsContainer = () => {
    const [item, setItem] = useState([]);
    const {proid} = useParams()
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                const prod = prods.find(producto => producto.id == proid)
                if (proid) {
                    setItem(prod)
                }else{
                    console.log(`El producto con ID ${proid} no se encontro`)
                }
            })
    },[])
    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    );
}


