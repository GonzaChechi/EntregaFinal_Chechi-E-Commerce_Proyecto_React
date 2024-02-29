import './ItemDetail.css'
import {Counter} from '../Counter/Counter' 
export const ItemDetail = ({item}) => {
    return (
        <div className='cardDetail'>
            <img className="img" src={`../img/${item.img}`} alt={`Imagen de ${item.title}`} />
                <div className='cardText'>
                <h2>{item.title}</h2>
                <p>Calidad del producto: {item.quality}</p>
                <p>Precio: ${item.price}</p>
                <p>Stock: {item.stock}</p>
                <p>Categoria del producto: {item.category}</p>
                <Counter stock={item.stock}/>
                </div>
            </div>
    );
}


