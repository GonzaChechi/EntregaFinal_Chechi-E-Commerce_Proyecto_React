import { Button } from "../Button/Button"
import './Item.css'
import { Link } from "react-router-dom"

export const Item = ({ product }) => {
    return (
        <div className="card" style={{ width: "22rem" }}>
            <img src={`${product.img}`} alt={`Imagen de ${product.title} id: ${product.id}`} />
            <div className="card-body">
                <h5 className="card-text"> {product.quality}</h5>
                <h2 className="card-title">{product.title}</h2>
                <span className="spanPrice">{`Precio: ${product.price}`}</span>
                <Link to={`/product/${product.id}`}>
                    <div><Button style={{ width: '200px', fontSize: '20px' }} >
                        Ver Producto
                    </Button></div>
                </Link>
            </div>
        </div>
    );
}


