
import Content from './Content'
import { useState } from 'react'
import Footer from './Footer'

// import axios from 'axios'
// const baseUrl = 'http://localhost:3001/notes'

// const getAll = () => {
//   const request = axios.get(baseUrl)
//   return request.then(response => response.data)
// }

// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => response.data)
// }

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// }

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}


const App = () => {
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  
  return  (
    <>
    <Notification message = {errorMessage}  setErrorMessage = {setErrorMessage}/>
     <Content  />
     <Footer />
     
                   
    </>
  )
}

export default App
