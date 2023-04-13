import React, { useRef } from 'react';

const FunctionalUseRef = () => {

    const inputRef = useRef(null)

    const HandleInput=()=>{
        console.log("called");
        inputRef.current.value=10000
        inputRef.current.focus()
        inputRef.current.style.color="red"
        // inputRef.current.style.display="none"
    }

    return (
        <div>
            <h1>UseRef in react</h1>
            <input type="text" ref={inputRef} />
            <button onClick={HandleInput} >handle Input</button>
        </div>
    );
};

export default FunctionalUseRef;