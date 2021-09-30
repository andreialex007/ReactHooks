import React, {useEffect, useRef, useState} from 'react';

function UseRef() {

    const [name, setName] = useState("");
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })

    return (
        <>
            <input value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
        </>

    );
}

function UseRef2() {

    const [name, setName] = useState("");
    const inputRef = useRef();

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}</div>
            <button onClick={focus} >Focus</button>
        </>

    );
}

function UseRef3() {

    const [name, setName] = useState("");
    const prevName = useRef("");

    useEffect(() => {
        prevName.current = name;
    }, [name]);

    return (
        <>
            <input value={name} onChange={event => setName(event.target.value)}/>
            <div>My name is {name} and it used to be {prevName.current}</div>
        </>

    );
}


export default UseRef3;
