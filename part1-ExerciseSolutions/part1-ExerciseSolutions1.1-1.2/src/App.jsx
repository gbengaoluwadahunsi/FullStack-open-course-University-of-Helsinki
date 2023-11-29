
import  Header  from './Header'
import Content from './Content'
import Total from './Total'





const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return ( 
    <>
      <Header course = {course} />
      <Content />
      <Total exercises1 = {exercises1} exercises2= {exercises2} exercises3 = {exercises3} />
    </>
  )
}

export default App
