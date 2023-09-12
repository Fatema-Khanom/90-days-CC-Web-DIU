import { useState } from "react"

export default function Team(){

    const [team,setTeam]= useState(11)
    const handleAdd=()=>{
        const newTeam=team+1 
        setTeam(newTeam)
    }
    const handleRemove=()=>{
        const newTeam=team-1
        setTeam(newTeam)
    }
    return (
        <div style={{
            border:'2px solid purple ',
            margin :'15px',
            padding :'15px',
            borderRadius:'15px'
        }}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd} style={{backgroundColor:'red',margin:'15px'}}>Add</button>
            <button onClick={handleRemove} style={{backgroundColor:'blue'}}>Remove</button>
        </div>
    )
}