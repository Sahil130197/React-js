import React, { useReducer } from 'react';

const FunctionalUseReducer = () => {

    const initvalue = {count:0}

    const reducer=  (state,action)=>{
        switch (action.type) {
            case ("INCREMENT"):
               return {count:state.count+1} ;
            case ("DECREMENT"):
               return {count:state.count-1} ;
        
            default:
                break;
        }
    }

    const [state, dispatch] = useReducer(reducer, initvalue)

    return (
        <>
        <div>
            <p>{state.count}</p>
            <button className='btn btn-primary' onClick={()=>dispatch({type:"INCREMENT"})}>increment</button>
            <button className='btn btn-danger' onClick={()=>dispatch({type:"DECREMENT"})}>decrement</button>
            </div>
        </>
    );
};

export default FunctionalUseReducer;