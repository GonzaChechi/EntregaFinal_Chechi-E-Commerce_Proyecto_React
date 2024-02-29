import { useState } from "react";


export const UseCounter = (mintValue = 0, maxValue = 1, step = 1) => {
    const [count, setCount] = useState(mintValue);

    const increment = () => {
        if (count + step <= maxValue) {
            setCount(count + step);
        }
    };

    const decrement = () => {
        if (count - step >= mintValue) {
            setCount(count - step);
        }
    };
    const reset = () => {
        setCount(mintValue)
    };
    return {count, increment, decrement, reset}
}


