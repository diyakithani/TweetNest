import { useEffect, useState } from "react";

function ReactState() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("hello");
    }, []);

    function count() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1 className="title">Diya slay</h1>
            <button onClick={count}>Increment</button>
            <hr />
            <p>Counter: {counter}</p>
        </div>
    );
}

export default ReactState;