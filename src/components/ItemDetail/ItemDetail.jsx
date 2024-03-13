import './ItemDetail.css'
import { Counter } from '../Counter/Counter'
import { useCartContext } from '../../context/CartContext'
export const ItemDetail = ({ item }) => {
    const { AddItem } = useCartContext()
    const handleAddToCart = (count) => {
        AddItem(item, count)
    }

    return (
        <div className='cardDetail'>
            <img className="img" src={`${item.img}`} alt={`Imagen de ${item.title}`} />
            <div className='cardText'>
                <h2>{item.title}</h2>
                <p>Calidad del producto: {item.quality}</p>
                <p>Precio: ${item.price}</p>
                <p>Stock: {item.stock}</p>
                <p>Categoria del producto: {item.category}</p>
                <Counter stock={item.stock} onAdd={handleAddToCart} />
            </div>
        </div>
    );
}


