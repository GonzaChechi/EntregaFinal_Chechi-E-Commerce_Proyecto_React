import { Button } from "../Button/Button"
import './Item.css'
import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    const handelOnAdd = () => {
        console.log("Producto añadido al carrito")
    }
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img src={`/img/${product.img}`} alt={`Imagen de ${product.title} id: ${product.id}`} />
            <div className="card-body">
                <h5 className="card-text"> {product.quality}</h5>
                <h2 className="card-title">{product.title}</h2>
                <span className="spanPrice">{`Precio: ${product.price}`}</span>
                <p className="card-text"> {`Stock: ${product.stock}`}</p>
                <div><Button style={{ width: '100px', fontSize: '20px' }} >
                    Agregar
                </Button></div>
            </div>
        </div>
    );
}


