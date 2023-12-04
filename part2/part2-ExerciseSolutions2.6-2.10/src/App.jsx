
// import Content from './Content'
import { useState } from 'react'



const Filter  =  ({filterByName, setFilterByName}) =>  {

  const handleFilterByNameChange = e =>  {
    console.log(e.target.value)
    setFilterByName(e.target.value)
   }
  
       return (

        <div>
        filter shown with<input value={filterByName} onChange={handleFilterByNameChange} />
      </div>
       )
}

const Form  =  ({addPerson, newName, newNumber, setNewName , setNewNumber}) => {

  const handleNameChange  =  e  => {
    console.log(e.target.value)
    setNewName(e.target.value)
 }

 const handleNumberChange  =  e  => {
   console.log(e.target.value)
   setNewNumber(e.target.value)
}

  return (
  
        <form onSubmit={addPerson}>
     
        <div>
          name: <input   value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number : < input  value = {newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
       </form>)
}

const Persons = ({nameFilter}) => {
  return (
    <section>
      {nameFilter.map(person => <h4 key = {person.id}>{person.name} {person.number}</h4>)}
    </section>
  )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterByName, setFilterByName] = useState('')

  

  const addPerson =  e  => {
    e.preventDefault()
    const nameObject =  { name: newName, number: newNumber, id: persons.length + 1 };
     (persons.some(person => person.name === nameObject.name)) ? alert( `${nameObject.name} already exists `)
    :setPersons(persons.concat(nameObject))
    
    
    setNewName('')
    setNewNumber('')
  }

  const nameFilter= filterByName  
  ? persons.filter(person=> person.name.toLowerCase().includes(filterByName.toLocaleLowerCase())) 
  : persons
   

  

  return (
    <div>
      <h2>Phonebook</h2>
      
       <Filter filterByName = {filterByName}  setFilterByName = {setFilterByName}/>

       <h3> add a new </h3>
       <Form  addPerson = {addPerson} newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber={setNewNumber}/>
      
      <h3>Numbers</h3>
      <Persons nameFilter = {nameFilter}  />
      
    </div>
  )
}

export default App



// const App = () => {
   
//   const notes = [
//     {
//       id: 1,
//       content: 'HTML is easy',
//       important: true
//     },
//     {
//       id: 2,
//       content: 'Browser can execute only JavaScript',
//       important: false
//     },
//     {
//       id: 3,
//       content: 'GET and POST are the most important methods of HTTP protocol',
//       important: true
//     }
//   ]
  
  
//   return  (
//     <>
//      <Content notes={notes} />
                   
//     </>
//   )
// }

// export default App
