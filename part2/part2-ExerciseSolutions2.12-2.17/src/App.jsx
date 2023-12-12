

import { useState, useEffect } from 'react'
import personService from './persons'



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

const Persons = ({nameFilter, deletePerson}) => { 
  const [hoverStates, setHoverStates] = useState(Array(nameFilter.length).fill(false));


  const handleHover = (index, isHovering) => {
    const updatedHoverStates = [...hoverStates];
    updatedHoverStates[index] = isHovering;
    setHoverStates(updatedHoverStates);
  }; 

  
    const buttonStyles = {
      default: {
        borderRadius: "5px",
        cursor: "pointer",
        border: "1px solid gray",
        backgroundColor: "white",
        color: "black",
        marginLeft: "4px",
        padding: "5px"
      },
      hover: {
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
        backgroundColor: "rgb(0,102,204)",
        color: "white",
        marginLeft: "4px",
        padding: "5px"
      }
    
     
  }
 


  return (
    
    <section>
      {nameFilter.map((person , index) => <h4 key={person.id}>
          {person.name} {person.number} 
          <button  
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          onClick={ ()=> deletePerson(person.id)} style={hoverStates[index] ? buttonStyles.hover : buttonStyles.default}>
                    Delete
          </button>
        </h4>)}
    </section>
  )
}

const Notification = ({ message , errorMessage}) => {
  if (message === null) {
    return null
  }

  return (
    <div  className='added'>
      {message}
      {errorMessage}
    </div>
  )
}




const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterByName, setFilterByName] = useState('')
  const [message, setCreatedMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  
  
  

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
    .catch(error => {
      console.log('fail' , error)
    })
  },[])

  
  const addPerson = (e) => {
    e.preventDefault();
    const existingPerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
  
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already in the phonebook. Replace the old number with a new one?`
      );
  
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber  };
        personService
          .update(existingPerson.id, updatedPerson)
          .then((response) => {
            const updatedPersons = persons.map((person) =>
              person.id === existingPerson.id ? response.data : person
            );
            setPersons(updatedPersons);
            setCreatedMessage( 
              `Updated ${existingPerson.name}'s phone number`
            )
            setTimeout(() => {
              setCreatedMessage(null)
            }, 5000)
            setNewName('');
            setNewNumber('');
          })
          .catch((error) => {
            console.log('fail', error);
            setErrorMessage( 
              `Added ${existingPerson.name}`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          });
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
  
      personService
        .create(nameObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setCreatedMessage( 
            `Added ${nameObject.name}`
          )
          setTimeout(() => {
            setCreatedMessage(null)
          }, 5000)
          setNewName('');
          setNewNumber('');
        })
        .catch((error) => {
          console.log('fail', error);
        });
    }
  };
  

  const deletePerson = (id ) => {
    
    const personToDelete = persons.find(person => person.id === id);
    console.log(personToDelete)
    const confirmDelete = window.confirm(`Delete ${personToDelete.name}?`);
       (confirmDelete)?personService
      .del(id)
      .then(() => {
        const updatedPersons = persons.filter(person => person.id !== id);
        setPersons(updatedPersons);
      })
      .catch(error => {
        console.log("fail", error);
      }):setPersons(persons)
  }

 

  const nameFilter= filterByName  
  ? persons.filter(person=> person.name.toLowerCase().includes(filterByName.toLocaleLowerCase())) 
  : persons
   

  

  return (
    <div>
       <Notification message = {message}  errorMessage={errorMessage} setCreatedMessage = {setCreatedMessage} setErrorMessage= {setErrorMessage}/>
      <h2>Phonebook</h2>
      
       <Filter filterByName = {filterByName}  setFilterByName = {setFilterByName}/>

       <h3> add a new </h3>
       <Form  addPerson = {addPerson} newName = {newName} newNumber = {newNumber} setNewName = {setNewName} setNewNumber={setNewNumber}/>
      
      <h3>Numbers</h3>
      <Persons  deletePerson = {deletePerson} nameFilter = {nameFilter} />
      
    </div>
  )
}

export default App






