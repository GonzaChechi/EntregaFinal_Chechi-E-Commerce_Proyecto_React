import { useCartContext } from "../../context/CartContext";
import { Counter } from "../Counter/Counter";
import { Button } from "../Button/Button";


import './ItemCart.css'

export const ItemCart = ({ product }) => {
    const { RemoveItem, AddItem } = useCartContext();
    const handleAddToCart = (count) => {
        AddItem(product, count)
    }
    return (
        <div className="itemCart">
            <div className="imgCart">
                <img src={`${product.img}`} alt={`Imagen de ${product.title} `} />
            </div>
            <div className="productCart">
                <h3>{product.title}</h3>
                <div className="quantCart" >
                    <p>Sub Total: ${product.price * product.quantity}</p>
                    <Counter initialValue={product.quantity} stock={product.stock} onAdd={handleAddToCart} />
                </div>
            </div>
            <div className="deleteProduct">
                <Button className="button" style={{ width: '100%', fontSize: '20px' }} onClick={() => RemoveItem(product.id)}>
                    Eliminar
                </Button>
            </div>
        </div>
    );
}


