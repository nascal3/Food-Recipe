import axios from 'axios'

// Set config defaults when creating the instance
const http = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http