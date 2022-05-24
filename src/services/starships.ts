import axios from 'axios'

export const listStarships = async () => {
    return await axios.get('https://swapi.dev/api/starships').then(res => res.data)
}

export const getStarshipDetails = async (id: number) => {
    return await axios.get(`https://swapi.dev/api/startships/${id}`).then(res => res.data)
}

