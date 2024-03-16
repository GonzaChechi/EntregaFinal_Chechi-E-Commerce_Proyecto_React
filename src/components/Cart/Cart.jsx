import './Cart.css';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Button } from "../Button/Button";
import { ItemList } from '../ItemList/ItemList';

export const Cart = () => {
    const { cart, totalPrice, emptyCart } = useCartContext();

    const emptyCartSection = (
        <>
            <h1>Carrito Vacío</h1>
            <Link to={'/'} >
                <Button style={{ width: '200px', fontSize: '20px' }} className='buttonReturn'>
                    Volver al inicio
                </Button>
            </Link>
        </>
    );
    return (
        <>
            {cart.length === 0 ? emptyCartSection : (
                <div>
                    <ItemList products={cart} plantilla="ItemCart" />
                    <div>
                        <p className='totalPrice'>Resumen de la compra: <span>$ {totalPrice}</span></p>
                        <div className='cartButton'>
                            <Button style={{ width: '200px', fontSize: '20px' }} onClick={emptyCart}>
                                Vaciar Carrito
                            </Button>
                            <Link to={'/'} >
                                <Button style={{ width: '250px', fontSize: '20px' }} className='buttonReturn'>
                                    Continuar comprando
                                </Button>
                            </Link>
                            <Link to={'/checkout'} >
                                <Button style={{ width: '200px', fontSize: '20px' }} className='buttonReturn'>
                                    Finalizar compra
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};