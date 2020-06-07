import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
  <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tbody>
        <tr><td>{props.text}: {props.value} {props.additionalText}</td></tr>
      </tbody>
    </table>
  )
}

const Statistics = (props) => {
  if (props.allClicks > 0) {
    return (
      <div>
        <StatisticLine text = "Good" value = {props.good} />
        <StatisticLine text = "Neutral" value = {props.neutral} />
        <StatisticLine text = "Bad" value = {props.bad} />
        <StatisticLine text = "All" value = {props.allClicks} />
        <StatisticLine text = "Average" value = {(props.sum / props.allClicks).toFixed(2)} />
        <StatisticLine text = "Positive" value = {((props.good / props.allClicks) * 100).toFixed(2)} additionalText = "%"/>
      </div>  
      )
  }
  return (
    <p>No feedback given</p> 
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [sum, setSum] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks + 1)
    setSum(sum + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll (allClicks + 1)
    setSum(sum - 1)
  }
  
  

  return (
    <div>
      <Header text = "Give Feedback"/>
      <Button handleClick = {handleGoodClick} text = "Good"/>
      <Button handleClick = {handleNeutralClick} text = "Neutral"/>
      <Button handleClick = {handleBadClick} text = "Bad"/>
      <Header text = "Statistics" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} 
      allClicks = {allClicks} sum = {sum}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
document.getElementById('root')
);

