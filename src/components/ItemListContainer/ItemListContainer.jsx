import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import { getProducts } from '../../firebase/firebase.js';
export const ItemListContainer = () => {
    const [product, setProduct] = useState([]);
    const { catid } = useParams();
    useEffect(() => {
        getProducts()
            .then(prods => {
                const productos = prods.filter(prod => prod.stock > 0)
                if (catid) {
                    const productosFiltrados = productos.filter(prod => prod.category == catid)
                    setProduct(productosFiltrados)
                } else {
                    setProduct(productos)
                }

            })
            .catch((error) => console.log(error))
    }, [catid])
    return (
        <div>
            <div className='d-flex justify-content-center mt-5 itemListContainer p-5'>
                <ItemList products={product} plantilla="Item" />
            </div>
        </div>
    );
}

