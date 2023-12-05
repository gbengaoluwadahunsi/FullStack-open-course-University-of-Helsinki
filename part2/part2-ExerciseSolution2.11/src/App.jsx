

import { useState, useEffect} from 'react'
import axios from 'axios'



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

const Persons = ({persons}) => {
  return (
    <section>
      {persons.map(person => <h4 key = {person.id}>{person.name} {person.number}</h4>)}
    </section>
  )
}



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterByName, setFilterByName] = useState('')

 useEffect ( () => {
  console.log('effect')
  axios
  .get('http://localhost:3001/persons')
     .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
     })
 }, [] )
 console.log('render', persons.length, 'notes')
  

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

       <h3> Add a new </h3>
       <Form  addPerson = {addPerson} newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber={setNewNumber}/>
      
      <h3>Numbers</h3>
      <Persons persons = {nameFilter}  />
      
    </div>
  )
}

export default App



