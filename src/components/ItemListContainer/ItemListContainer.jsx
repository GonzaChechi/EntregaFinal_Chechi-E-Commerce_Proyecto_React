import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
export const ItemListContainer = () => {
    const [product, setProduct] = useState([]);
    const { catid } = useParams();
    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                if (catid) {
                    const productosFiltrados = prods.filter(prod => prod.category == catid)
                    setProduct(productosFiltrados)
                }else{
                    setProduct(prods)
                }
                
            })
            .catch((error) => console.log(error))
    }, [catid])
    return (
        <div>
            <div className='d-flex justify-content-center mt-5 itemListContainer p-5'>
                <ItemList products={product} />
            </div>
        </div>
    );
}

