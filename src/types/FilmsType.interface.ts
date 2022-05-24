export interface FilmTypes {
    count: Number,
    next: null | String,
    previous: null | String,
    results?: Result[];
}

export interface Result {
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    species: Array<any>,
    starships: Array<any>,
    vehicles: Array<any>,
    characters: Array<any>,
    planets: Array<any>,
    url: String,
    created: String,
    edited: String,
}