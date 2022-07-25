import axios from 'axios'

const api = axios.create({
    baseURL: 'https://backend-shopsmart.herokuapp.com',
    // baseURL: 'http://localhost:666',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default api;