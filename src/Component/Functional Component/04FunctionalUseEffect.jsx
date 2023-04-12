import React, { useEffect, useState } from "react";

const FunctionalUseEffect = () => {

  const [counter,setCounter]= useState(0)  
  const [otherData,setOtherData]= useState("test")  
 
//   it will work like constructer,by default invoked,but also called when some Event is performed.
//   useEffect(() => {
//     console.log("Useeffect Called");
//   });

//   if we give second parameter as blank it will work as a constructer
//   useEffect(() => {
//     console.log("Useeffect Called");
//   },[]);

//   when we give retunt to the useeffect method, it will perform like did mount
//   useEffect(() => {
//     console.log("Useeffect Called");
//     return()=>{
//         console.log("did mount");
//     }
//   },[]);


  useEffect(() => {
    console.log("Useeffect Called");
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
      Functional Compo UseEffect
      <button className='btn btn-success' onClick={Increase}> click {counter}</button>
      <button className='btn btn-success' onClick={()=>setOtherData("testing")}> check other data {otherData}</button>
    </div>
  );
};

export default FunctionalUseEffect;
