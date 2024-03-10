import './Counter.css'
import { UseCounter } from '../../hooks/UseCounter';
import { Button } from '../Button/Button';

export const Counter = ({ stock, onAdd, initialValue}) => {
    const { count, increment, decrement } = UseCounter(initialValue, stock, 1)

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
                <Button style={{ width: '100px', fontSize: '20px' }} onClick={() => onAdd(count)}>
                    Agregar
                </Button>
            </div>
        </div>

    )
}