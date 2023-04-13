import React, { useRef } from 'react';
import UseImpeChild from './UseImpeChild.jsx';

const FunctionalUseImperative = () => {

    const ref = useRef();

    return (
        <div>
            <UseImpeChild ref={ref} />
            <button onClick={()=>{ref.current.increment()}} >parent click</button>
        </div>
    );
};

export default FunctionalUseImperative;