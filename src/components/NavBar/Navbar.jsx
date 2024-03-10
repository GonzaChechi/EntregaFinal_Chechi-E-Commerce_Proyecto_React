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
                        <img className="logo" src='../../../public/img/logo3Droid.png' />
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
