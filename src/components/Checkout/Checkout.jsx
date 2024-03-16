import './Checkout.css'
import { Button } from '../Button/Button';
import { useRef } from 'react';
import { useCartContext } from "../../context/CartContext.jsx";
import { Link, useNavigate } from 'react-router-dom';
import { Zoom, toast } from 'react-toastify';
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from '../../firebase/firebase.js';

export const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate() //devuelve la locacion actual del componente
    const { cart, totalPrice, emptyCart } = useCartContext()
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataForm = new FormData(formRef.current) //Paso formulario HTML a un objeto
        const cliente = Object.fromEntries(dataForm) //Paso un objeto iterador a un objeto simple
        const aux = [...cart]

        //MODIFICACION DE STOCK DE PRODUCTOS COMPRADOS
        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(proddb => {
                if (proddb.stock >= prodCarrito.quantity) {
                    proddb.stock -= prodCarrito.quantity
                    updateProduct(proddb.id, proddb)
                } else {
                    toast.info(`El producto ${prod.title}, no posee la cantidad de unidades que desea, maximo de compra: ${prod.stock}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "colored",
                        transition: Zoom,
                    });
                    console.log(`El producto ${proddb.title} no posee suficiente stock, stock máximo ${proddb.stock} unidades`)
                    aux.filter(prod => prod.id != proddb.id)
                }
            })
        })

        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))
        createOrdenCompra(cliente, totalPrice, aux2, new Date().toLocaleDateString(`es-AR`, { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`Gracias por su compra! ${ordenCompra.id}, el total a abonar es $${totalPrice}`, {
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
                emptyCart()
                e.target.reset();
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar la orden de compra ${error}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                });
            })
    }
    return (
        <>
            {
                cart.length === 0 ?
                    <>
                        <h2>Para realizar una compra debe tener produtos en el carrito</h2>
                        <Link to={'/'} >
                            <Button style={{ width: '200px', fontSize: '20px' }} className='buttonReturn'>
                                Volver al inicio
                            </Button>
                        </Link>
                    </>
                    :
                    <>
                        <div>
                            <form className="row g-3 form" action='' ref={formRef} onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor="inputName" className="form-label">
                                        Nombre:
                                    </label>
                                    <input type="text" className="form-control" name="inputName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLname" className="form-label">
                                        Apellido:
                                    </label>
                                    <input type="text" className="form-control" name="inputLname" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputDir" className="form-label">
                                        Dirección:
                                    </label>
                                    <input type="text" className="form-control" name="inputDir" />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputDni" className="form-label">
                                        DNI:
                                    </label>
                                    <input type="number" className="form-control" name="inputDni" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail" className="form-label">
                                        Email:
                                    </label>
                                    <input type="email" className="form-control" name="inputEmail" />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputTel" className="form-label">
                                        Teléfono:
                                    </label>
                                    <input type="number" className="form-control" name="inputTel" />
                                </div>
                                <div className="col-12">
                                    <Button type="submit" className="btn btn-primary">
                                        Finalizar Compra
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </>
            }

        </>

    );
}

