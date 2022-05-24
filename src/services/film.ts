import type { ListFilmTypes, FilmTypes } from './../types/FilmsType.interface';
import axios from 'axios'

export const listFilms = async (): Promise<ListFilmTypes> => {
    return await axios.get('https://swapi.dev/api/films').then(res => res.data)
}

export const getFilmDetails = async (id: number): Promise<ListFilmTypes> => {
    return await axios.get(`https://swapi.dev/api/films/${id}`).then(res => res.data)
}

