import { CartWidget } from "../cartWidget/CartWidget";
import { Categories } from "../Categories/Categories";
import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={'/'}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-2024-23fa8.appspot.com/o/logo3Droid.png?alt=media&token=936f7810-6317-49eb-aaf9-ff4275f6dc5c" alt="logotipo de la marca" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse margin  " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Categories />
                        </ul>
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>
    );
};
