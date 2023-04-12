import React, { useEffect, useLayoutEffect, useState } from 'react';


const FunctionalUseLayoutEffect = () => {

    const [counter,setCounter]= useState(0)  
  const [otherData,setOtherData]= useState("test") 

//   useEffect(() => {
//         console.log("Useeffect Called constructer");
//       },[]); 

  useLayoutEffect(() => {
        console.log("UseLayOuteffect Called constructer");
      },[]); 

  useLayoutEffect (() => {
    console.log("UseLayOuteffect Called");
    return()=>{
        console.log("did mount");
    }
  },[counter]);


  const Increase = () => {
        console.log("btn clicked");
        setCounter(counter+1)
      };


    return (
        <div>
            Functional Compo UselayOutEffect
      <button className='btn btn-success' onClick={Increase}> click {counter}</button>
      <button className='btn btn-success' onClick={()=>{ console.log("btn clicked"); setOtherData("testing")}}> check other data {otherData}</button>
        </div>
    );
};

export default FunctionalUseLayoutEffect;