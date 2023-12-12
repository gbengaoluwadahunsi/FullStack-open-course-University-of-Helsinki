import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const del = (id) =>{
  return axios.delete(`${baseUrl}/${id}`)
}

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  del: del
}


// useEffect(() => {
//   console.log('effect')
//   axios
//     .get('http://localhost:3001/notes').then(response => {
//       console.log('promise fulfilled')
//       setNotes(response.data)
//     })
// }, [])


// Let's rewrite the code a bit differently.

// const hook = () => {
//   console.log('effect')
//   axios
//     .get('http://localhost:3001/notes')
//     .then(response => {
//       console.log('promise fulfilled')
//       setNotes(response.data)
//     })
// }

// useEffect(hook, [])