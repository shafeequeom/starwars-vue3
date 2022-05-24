export interface ListFilmTypes {
    count: Number,
    next: null | string,
    previous: null | string,
    results?: FilmTypes[];
}

export interface FilmTypes {
    title: string,
    episode_id: Number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
    species: Array<any>,
    starships: Array<any>,
    vehicles: Array<any>,
    characters: Array<any>,
    planets: Array<any>,
    url: string,
    created: string,
    edited: string,
}