import './ItemDetail.css'
import { Counter } from '../Counter/Counter'
import { useCartContext } from '../../context/CartContext'
import { Zoom, toast } from 'react-toastify'
export const ItemDetail = ({ item }) => {
    const { AddItem } = useCartContext()
    const handleAddToCart = (count) => {
        AddItem(item, count)
        item.stock === 0 ?
            toast.info(`El producto ${item.title}, no posee stock`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            })
            :
            toast.success(`Producto agregado correctamente`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
                transition: Zoom,
            })
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


