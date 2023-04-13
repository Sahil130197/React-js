import React, { forwardRef, useImperativeHandle, useState } from 'react';

const UseImpeChild = (props,ref) => {

    const [count,setcount] = useState(0)

    useImperativeHandle(ref,() =>({
        increment
      }));

    const increment =()=>{
        setcount(count+1)
    }

    return (
        <div>
            <p>{count} </p>
            <button onClick={increment}>child click</button>
        </div>
    );
};

export default forwardRef(UseImpeChild);