import './Categories.css'
import { Link } from "react-router-dom";
export const Categories = () => {
    return (
        <>
            <li className="nav-item">
                <Link to={'/'} className='link'>
                    <button className="nav-link active" aria-current="page" >
                        Home
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'./category/modulo'} className='link'>
                    <button className="nav-link active" aria-current="page">
                        Modulos
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'./category/pin-de-carga'} className='link'>
                    <button className="nav-link active" >
                        Pin de carga
                    </button>
                </Link>

            </li>
        </>
    );
}


