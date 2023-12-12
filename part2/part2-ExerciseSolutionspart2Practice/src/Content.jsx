

import { useState, useEffect } from 'react'
import noteService from './notes'



const Content = ({setErrorMessage}) => {
  
  const [notes, setNotes] = useState([]) 
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true)

  useEffect(() =>{
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
      .catch(error => {
        console.log('fail', error)
      })
  }, [])
    const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important )  
 
     
    const toggleImportanceOf = (id) => {
      const note =  notes.find(n => n.id === id)
      const changedNote = {...note , important: !note.important}
      noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })

      .catch(error => {
        setErrorMessage( error ,
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      
    }



  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
      
  }
       noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
      .catch(error => {
        console.log("fail" ,error)
      })
}

  const handleNoteChange  =  e =>  {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }

 
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <li key = {note.id}>{note.content}  <button onClick={() => toggleImportanceOf(note.id)} >{note.important ? 'make not important' : 'make important'}</button></li>)}
      </ul>
      <form onSubmit={addNote}>
        <input  value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>  
    </div>
  )
}

export default Content

