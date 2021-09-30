import React, {useState} from 'react';

function UseState() {

    const [count, setCount] = useState(4);
    const [theme, setTheme] = useState('blue');

    function decrementCount() {
        setCount(prevState => prevState - 1);
    }
    function incrementCount() {
        setCount(prevState => prevState + 1);
        setTheme("red");
    }

    return (
        <>
            <button onClick={decrementCount} >-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount} >+</button>
        </>

    );
}

export default UseState;
