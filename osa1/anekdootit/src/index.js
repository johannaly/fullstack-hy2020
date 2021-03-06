import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
      <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const Header = (props) => {
  return (
    <h2>{props.text}</h2>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(7).join('0').split('').map(parseFloat))
  const [maxIndex, setIndex] = useState(0)

  const isNull = (currentvalue) => currentvalue === 0

  const handleClick = () => {
    setSelected(Math.floor((Math.random() * 6)))
  }

  const HandleVoteClick = () => {
    const copy = [...points]
    copy[selected] +=1
    setPoints(copy)
  
    let index = copy.indexOf(Math.max(...copy))
    setIndex(index)
  }

    return (
    <div>
      <Header text = " Anecdote of the day" />
      {props.anecdotes[selected]}
      <p>
        <Button handleClick = {handleClick} text = "Next Anecdote"/>
        <Button handleClick = {HandleVoteClick} text = "Vote" />
      </p>
      {!points.every(isNull) &&
        <div>
          <Header text = "Anecdotes with most votes" />
          {props.anecdotes[maxIndex]}
        </div>
      }
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes = {anecdotes}/>,
  document.getElementById('root')
);

