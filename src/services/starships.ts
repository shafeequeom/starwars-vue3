import axios from 'axios'
import type { ListStarshipTypes, StarshipTypes } from '@/types/Starship.interface'

export const listStarships = async (page: number): Promise<ListStarshipTypes> => {
    return await axios.get(`https://swapi.dev/api/starships?page=${page}`).then(res => res.data)
}

export const getStarshipDetails = async (id: Number): Promise<StarshipTypes> => {
    return await axios.get(`https://swapi.dev/api/startships/${id}`).then(res => res.data)
}

