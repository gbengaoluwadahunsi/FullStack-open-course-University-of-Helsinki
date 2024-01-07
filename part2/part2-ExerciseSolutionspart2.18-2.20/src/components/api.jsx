import axios from 'axios'
const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api`

const getAll = () => {
  return axios.get(baseUrl)
}

// const create = newObject => {
//   return axios.post(baseUrl, newObject)
// }

// const update = (id, newObject) => {
//   return axios.put(`${baseUrl}/${id}`, newObject)
// }

export default { 
  getAll: getAll, 
//   create: create, 
//   update: update 
}


