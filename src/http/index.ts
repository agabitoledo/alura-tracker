import axios, { AxiosInstance } from 'axios'

const clienteHttp: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004'
})

export default clienteHttp
