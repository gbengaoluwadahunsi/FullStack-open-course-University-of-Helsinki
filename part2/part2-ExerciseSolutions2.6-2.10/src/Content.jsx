






















// import  {useState} from   'react'

// const Content = (props) => {
  
//   const [notes, setNotes] = useState(props.notes) 
//   const [newNote, setNewNote] = useState('a new note...');
//   const [showAll, setShowAll] = useState(true)

//   const addNote = (event) => {
//     event.preventDefault()
//     const noteObject = {
//       content: newNote,
//       important: Math.random() < 0.5,
//       id: notes.length + 1,
//   }

//   setNotes(notes.concat(noteObject))
//   setNewNote('')
// }

//   const handleNoteChange  =  e =>  {
//     console.log(e.target.value)
//     setNewNote(e.target.value)
//   }


//   const notesToShow = showAll
//   ? notes
//   : notes.filter(note => note.important )

//   return (
//     <div>
//       <h1>Notes</h1>
//       <div>
//         <button onClick={() => setShowAll(!showAll)}>
//           show {showAll ? 'important' : 'all' }
//         </button>
//       </div>
//       <ul>
//         {notesToShow.map(note => <li key = {note.id}>{note.content}</li>)}
//       </ul>
//       <form onSubmit={addNote}>
//         <input  value={newNote} onChange={handleNoteChange}/>
//         <button type="submit">save</button>
//       </form>  
//     </div>
//   )
// }

// export default Content

