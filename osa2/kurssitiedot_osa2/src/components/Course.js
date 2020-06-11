import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

const Part = (props) => {
    const part = props.part
    return (
        <div>
            <p key={part.id}>{part.name} {part.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.parts.map(p => <Part key={p.id} part={p} />)}
        </div>
    )
}

const Total = (props) => {
    const exercisesArray = props.parts.map(part => part.exercises)
    const sum = exercisesArray.reduce((a, b) => a + b)

    return (
        <p style={{ fontWeight: "bold" }}>
            Total of {sum} exercises
        </p>
    )
}
const Course = (props) => {
    return (
        <div>
            <Header title={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </div>
    )
}

export default Course