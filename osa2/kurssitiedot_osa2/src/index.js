import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  //console.log("header",props)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
   //console.log("part", props)
   const courseParts = props.part.parts
   //console.log(courseParts)
  return (
    <div>
         {courseParts.map(part => <p key = {part.id}>{part.name} {part.exercises}</p>)}        
    </div>
  )
}

const Content = (props) => {
  //console.log("content",props)
  return (
  <div>
    <Part part = {props.parts} />
  </div>
  )
}

const Total = (props) =>{
  const parts = props.parts.parts
  //console.log("total", props)
  const exercisesArray = parts.map(part => part.exercises)
  //console.log(exercisesArray)  
  const reducer = (sumOfValues, currentValue) => sumOfValues + currentValue
  const sum = exercisesArray.reduce(reducer)
  //console.log("summa", sum)
    return (
      <p style ={{fontWeight: "bold"}}>Total of {sum} exercises</p>
  )
}

const Course = (props) => {
    //console.log("course", {props})
    return (
    <div>
        <Header course = {props.course} />
        <Content parts = {props.course} />
        <Total parts = {props.course} />
    </div>
    )
}


const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      }, 
      
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },

      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
  <div>
    <Course course = {course} />
  </div>
  )
}

ReactDOM.render(
  <App />, document.getElementById('root')
  )
  

