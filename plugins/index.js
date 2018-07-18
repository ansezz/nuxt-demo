import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://www.medi1news.com/api/',
})
