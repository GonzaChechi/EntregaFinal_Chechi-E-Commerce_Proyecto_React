import './Checkout.css'
import { Button } from '../Button/Button';
import { useRef } from 'react';
export const Checkout = () => {
    const formRef=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const dataForm = new FormData(formRef.current) //Paso formulario HTML a un objeto
        const data = Object.fromEntries(dataForm) //Paso un objeto iterador a un objeto simple
        e.target.reset();
    }
    return (
        <div>
            <form className="row g-3 form" action='' ref={formRef} onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">
                        Nombre:
                    </label>
                    <input type="text"  className="form-control" name="inputName" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputLname" className="form-label">
                        Apellido:
                    </label>
                    <input type="text"  className="form-control" name="inputLname" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputDir" className="form-label">
                        Dirección:
                    </label>
                    <input type="text"  className="form-control" name="inputDir" />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputDni" className="form-label">
                        DNI:
                    </label>
                    <input type="number"  className="form-control" name="inputDni" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">
                        Email:
                    </label>
                    <input type="email"  className="form-control" name="inputEmail" />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputTel" className="form-label">
                        Teléfono:
                    </label>
                    <input type="number"  className="form-control" name="inputTel" />
                </div>
                <div className="col-12">
                    <Button type="submit" className="btn btn-primary">
                        Finalizar Compra
                    </Button>
                </div>
            </form>

        </div>
    );
}

