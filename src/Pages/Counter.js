import React, {useState} from "react";
import {Button} from "reactstrap";

const Counter = () => {
    const [state, increment] = useState(0);
    return (
        <>
            <h1>Counter page</h1>
            <div>Value: {state}</div>
            <Button color="primary" type="button" onClick={() => (increment(state + 1))}>Increment</Button>
        </>
    );
}

export default Counter;