import { useState } from 'react'

import Content from './Content'
import Header from './Header'
import Total from './Total'
import History from './History'
import Button from './Button'


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks , setAllclicks] = useState([])
 

  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const handleLeftClick  = () => {
  setAllclicks(allClicks.concat('L'))
  const updatedLeft = left + 1
    setLeft(updatedLeft)}
    
  
  const handleRightClick  = () => {
    setAllclicks(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)}
    
   
    
   
  return  (
    <>
     <Header  course = {course.name}/>
     <Content parts = {course.parts} />
     <Total  parts = {course.parts}/>
     {left}
     <Button text = {"left"} onClick = {handleLeftClick}/>
     <Button text = {"right"} onClick = {handleRightClick}/>
     {right}
     <History  allClicks = {allClicks}/>           
     
    </>
  )
}

export default App
