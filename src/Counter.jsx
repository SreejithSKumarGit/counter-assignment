import React from "react";

const Counter=()=>
{
    const [count,setCount]=React.useState(0);
  const increase=(value)=>{
    setCount(count+value);
  }
  const double=()=>{
    setCount(count*2);
  }
  return (
    <> 
    <h1 style={count%2===0 ? {color:"green"} : {color:"red"}}>Counter : {count}</h1>
    <button onClick={()=>{increase(1)}}>Increase by 1</button>
    <button onClick={()=>{increase(-1)}}>Decrease by -1</button>
    <br />
    <button onClick={()=>{double()}}>Double</button>
    </>
  );
}
export default Counter;
