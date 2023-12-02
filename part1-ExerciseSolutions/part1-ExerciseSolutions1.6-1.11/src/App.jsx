
import { useState } from 'react'

const StatisticLine  =  ({text,value}) => {
  return (
    <>
      <td>{text}</td><td>{value}</td>
    </>

  )
}


const  Statistics =  ({good,bad,neutral}) => {
  if ((good + bad + neutral) === 0) {
    return (
      <>
       <div>No feedback given</div>
      </>
    )
  }
  return (
    <>
    <h2>statistics</h2>
     <table>
    <tbody>
      <tr><StatisticLine text = {"good"} value = {good} /></tr>
      <tr><StatisticLine text={"neutral"} value ={neutral} /></tr>
      <tr><StatisticLine  text={"bad"} value = {bad}/></tr>
      <tr><td>{'all'}</td><td>{good + neutral + bad}</td></tr>
      <tr><td>{'average'}</td><td>{((good- bad)/(good + neutral + bad)).toFixed(1)}</td></tr>
      <tr><td>{'positive'}</td><td>{(good/(good + neutral + bad)*100).toFixed(1)}%</td></tr>
    </tbody>
     </table>
  
  </>
  )
}

const Button = ({text, onClick}) => {
  return (
    <>
       <button onClick = {onClick}>{text} </button>
    </>
  )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

   const handleClickGood = () =>  setGood(good + 1)
   const handleClickNeutral = () => setNeutral(neutral + 1)
   const handleClickBad = () => setBad(bad+1)

  return (
    <>
     <h2>give feedback</h2>
     <Button text={'good'} onClick = {handleClickGood}/>
     <Button text={'neutral'} onClick = {handleClickNeutral}/>
     <Button  text={'bad'} onClick = {handleClickBad}/>

     <Statistics good = {good} bad = {bad} neutral = {neutral}  />
     
    </>
  )
}

export default App