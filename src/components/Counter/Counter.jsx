import './Counter.css'
import { useState } from "react";
import { Button } from '../Button/Button';

export const Counter = ({ stock, onAdd }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    };
    return (
        <div className='flex'>
            <div className='counter'>
                <Button style={{ width: '50px', fontSize: '20px' }} onClick={increment}>
                    +
                </Button>

                <h2>{count}</h2>

                <Button style={{ width: '50px', fontSize: '20px' }} onClick={decrement}>
                    -
                </Button>
            </div>
            <div className='agregar'>
                <Button style={{ width: '100px', fontSize: '20px' }} onClick={onAdd}>
                    Agregar
                </Button>
            </div>

        </div>

    )
}