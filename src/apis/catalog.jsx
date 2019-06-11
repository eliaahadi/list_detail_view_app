import axios from 'axios';

let catalog = axios.create({
  baseURL: 'http://localhost:5001/items',
  method: 'GET',
  responseType: 'json',
})


export default catalog;