import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './toDo'
import Actor from './Actor'
function App() {

  const actors =['Sakib','Shoriful Raz', 'Jasim','Rubel']
  return (
    
    <>
      
      <h1>Vite + React</h1>
      <Actor name = {"Bappa Raz"} ></Actor>
      {
        actors.map(Actor =><Actor name= {actor}></Actor>)
      }

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn React core consept"isDone={false}></Todo>
      <Todo task="Try JSX "isDone={true}></Todo> */}
      {/* <Person></Person>
       <Student ></Student>
       <Developer></Developer>
       <Device name='Laptop' price='20k'></Device>
       <Device name='Mobile' price='20k'></Device>
       <Device name='Tablet' price='20k'></Device> */}
    </>
  )
}

function Device(props){
 return <h2> This Device: {props.name} Price: {props.price}</h2>
}

function Person(){
  const age = 25;
  const money = 20;
  const person = {name:'sakib' , age:'30'};

  return  <h1>i am a {person.name} with age :{age+money}</h1>
}

function Student(){
  return <div className='student'>
    <h3>This is a student</h3>
    <p>Name:Robin</p>
    <p>Age: 15</p>
  </div>
}
function Developer(){
  const developerStyle = {
    margin: '20px',
    padding : '20px',
    border: '2px solid purple',
    borderRadius: '20px'

  }
  return (
    <div style ={developerStyle} >
    <h3>D3evo devo </h3>
    <p>coding:</p>
    
  </div>
  )
}

export default App
