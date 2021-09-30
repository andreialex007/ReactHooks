import React, {useEffect, useState} from 'react';

function UseEffect1() {

    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);



    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(x => x.json())
            .then(x => setItems(x));
    }, [resourceType]);

    useEffect(() => {
        console.log('on mount');
    }, []);


    return (
        <>
            <div>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(x=>{
                return <pre>{JSON.stringify(x)}</pre>
            })}
        </>

    );
}

function UseEffect2() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [items, setItems] = useState([]);

    const handleResize = ()=>{
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <div>
            {windowWidth}
        </div>

    );
}

export default UseEffect2;
