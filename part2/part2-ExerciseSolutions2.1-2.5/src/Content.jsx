

const Part = ({name , exercises}) => {
  return (
    <>
     <p>
        {name} {exercises}
      </p>
    </>
  )
}



const Total = ({exercises}) => {
  
  return (
    <>
      <h4> total of {exercises.reduce((a,c) =>  a+c.exercises , 0)} exercises</h4>
    </>
  )
}






const Content = ({courses}) => {
  
    return (
      <>
        <section>
          <h3>{courses[0].name}</h3>
          <Part  name = {courses[0].parts[0].name}  exercises= {courses[0].parts[0].exercises} />
          <Part  name = {courses[0].parts[1].name}  exercises= {courses[0].parts[1].exercises}/>
          <Part  name = {courses[0].parts[2].name}  exercises= {courses[0].parts[2].exercises} />   
          <Part  name = {courses[0].parts[3].name}  exercises= {courses[0].parts[3].exercises} /> 
           <Total  exercises = {courses[0].parts}/>   
        </section>

        <section>
          <h3>{courses[1].name}</h3>
          <Part  name = {courses[1].parts[0].name}  exercises= {courses[1].parts[0].exercises} />
          <Part  name = {courses[1].parts[1].name}  exercises= {courses[1].parts[1].exercises}/>
          <Total  exercises = {courses[1].parts}/>    
        </section>
      </>
    )
  }
  
  export default Content