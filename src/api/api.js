import axios from 'axios';


export const api = axios.create({
    baseURL:import.meta.env.BASE_API_URL,
    headers:{
        'Content-Type': 'application/json; charset=UTF-8;',
        accept: 'application/json'
    },
})


