import { useEffect, useState } from "react";

export default function ReactState() {
    var [counter, setCounter] = useState(0);

    useEffect(() => {
        alert("hello");
    }, []);

    function count() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1 className="title">Diya slay</h1>
            <button onClick={count}>{counter * 2}</button>
        </div>
    );
}