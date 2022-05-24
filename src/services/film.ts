import axios from 'axios'

export const listFilms = async() => {
    return await axios.get('https://swapi.dev/api/films').then(res=> res.data)
}

export const getFilmDetails = async(id:number) => {
    return await axios.get(`https://swapi.dev/api/films/${id}`).then(res=> res.data)
}

