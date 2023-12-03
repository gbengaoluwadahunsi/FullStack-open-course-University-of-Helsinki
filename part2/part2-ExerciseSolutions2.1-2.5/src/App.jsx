
import Content from './Content'
import Total from './Total'
import Header from './Header'



const App = () => {
   
  const course = {
    name: 'Half Stack application development',
    parts: [
      { id: 0,
        name: 'Fundamentals of React',
        exercises: 10
      },
      { id: 1,
        name: 'Using props to pass data',
        exercises: 7
      },
      { id : 2,
        name: 'State of a component',
        exercises: 14
      },
      { id : 3,
        name: 'Redux',
        exercises: 11
      },

    ]
  }

  
   
  return  (
    <>
     <Header  course = {course.name}/>
     <Content parts = {course.parts} />
     <Total  parts = {course.parts}/>
               
    </>
  )
}

export default App
