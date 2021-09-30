import React, {useEffect, useMemo, useState} from 'react';

function UseMemo() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => slowFunction(number), [number]);
    const themeStyles = useMemo(() => ({
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    }),[dark]);

    useEffect(() => {
        console.log("Theme Changed");
    }, [themeStyles]);

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevState => !prevState)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>

    );
}

function slowFunction(num) {
    console.log("Calling Slow Function");
    for (let i = 0; i < 999999999; i ++) { }
    return num * 2;
}



export default UseMemo;
