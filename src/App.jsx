
import React, { useState,  } from "react";

const App = () => {


//  let count=12;
//  console.log(count);

//   const IncreaseValue=()=>{
//     count = count + 1;
//     console.log("clicked",count);
//   };


let [count, setCount] =useState(12)
const IncreaseValue=()=>{
  setCount(count+1);
}
const DecreaseValue=()=>{
  setCount(count-1);
}

//  const [name,setName]= useState("manvi pardhi");
//  const  changeData=()=>{
//   setName("manu");
//  }

  return (
    <>
      <h1>hello everyone</h1>
      <span>count:{count}</span><br />
      <button onClick={IncreaseValue}>Increase</button> <br />
       <button onClick={DecreaseValue}>Decrease</button><br />


      {/* {name} <br />
      <button onClick={changeData}>change</button> */}
      {/* <button onClick={()=>setName("princi")}>change</button> */}

    </>
  );
};

export default App;


