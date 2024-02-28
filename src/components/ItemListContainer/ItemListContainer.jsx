import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
export const ItemListContainer = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch('./data/productos.json')
        .then(response=>response.json())
        .then(prods=>{
            setProduct(prods)
        })
        .catch((error)=>console.log(error))
    },[])
    return (
        <div>
            <div className='d-flex justify-content-center mt-5 itemListContainer p-5'>
                <ItemList products={product}/>
            </div>
        </div>
    );
}

