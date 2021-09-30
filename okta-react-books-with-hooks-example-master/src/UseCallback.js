import React, {useCallback, useEffect, useRef, useState} from 'react';
import List from "./List";

function UseCallback() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback((incrementor) => {
        return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
    },[number]);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    };

    return (
        <div style={theme} >
            <input type="number"
                    value={number}
                   onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={()=>setDark(prevState => !prevState)}>
                Toggle theme
            </button>
            <List getItems={getItems} />
        </div>

    );
}

export default UseCallback;
