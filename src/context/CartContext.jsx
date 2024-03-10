import { useState, createContext, useContext } from "react";
const CartContext = createContext(); //creacion del contexto

export const useCartContext = () => useContext(CartContext) //funcion para consultar mi contexto en otro componente
export const CartProvider = (props) => { //forma de proveer el contexto, puede recibir props
    const [cart, setCart] = useState([])

    //Buscar Producto
    const isInCart = (id) => {
        return cart.some(prod => prod.id === id) //devuleve verdadero o falso si existe un producto en el carrito
    }

    //Agregar Producto
    const AddItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].quantity = cantidad
            setCart(aux)
        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }
            setCart([...cart, newItem]) //guardo en el carrito el nuevo producto
        }
    }

    //Eliminar Producto
    const RemoveItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))

    }

    //Eliminar todos los productos del carrito
    const emptyCart = () => {
        setCart([])
    }

    //Obtener cantidad de productos
    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    //Obtener precio total del carrito
    const totalPrice = cart.reduce((acum, prod) => acum + (prod.quantity * prod.price), 0);


    return (
        <CartContext.Provider value={{ cart, AddItem, RemoveItem, emptyCart, getItemQuantity, totalPrice }} >
            {props.children}
        </CartContext.Provider>
    )
}