import React, { useState } from 'react';

const FunctionalState = () => {
    const [state,setstate] = useState("test")

    
    const ChangeData=()=>{
        console.log(" called ");
       
        // something("Data")
        setstate("tested")
    }

    const [counter,setCounter] = useState(0)

    const Increase=()=>{
        setCounter(counter+1)
    }
    return (
        <div>
            <p>State data : {state} </p>
            <button className='btn btn-primary' onClick={ChangeData}>click</button><br /><br />
            <p>State Data :  {counter} </p>
            <button className='btn btn-success' onClick={Increase}>increment</button>
            
        </div>
    );
};

export default FunctionalState;