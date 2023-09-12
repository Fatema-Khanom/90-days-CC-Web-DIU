import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  
  function handleClick(){
    alert ('Button Clicked');
  }
  const handleClick2=() => {
    alert ('Button Clicked 2')
  }
  const addToFive=(num)=>{
      alert (num+5)
  }

  return (
    <>
      
      <h1>React core concept 2</h1>
      <Users></Users>
      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={()=>{alert ('Third Button Clicked')}}>Click me3</button>
      <button onClick={()=>{addToFive(4)}}>Click me4</button>
    </>
  )
}

export default App
