import { useState } from "react"

export default function Counter(){
    const [count, setCount ]=useState(0)
    const handleAdd=()=>{
        const newCount=count + 1;
        setCount(newCount);
    }
    const handleReduce=()=>{
        const newCount=count - 1;
        setCount(newCount);
    }
    return (
        <div style={{border:'2px solid yellow'}}>
            <h3>counter:{count}</h3>
            <button style={{backgroundColor:'skyblue'}} onClick={handleAdd}>Add</button>
            <button style={{backgroundColor:'pink',margin:'10px'}} onClick={handleReduce}>Reduce</button>
        </div>
    )
}
