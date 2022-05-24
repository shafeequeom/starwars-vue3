export interface StarshipTypes {
    count: number,
    next: null | String,
    previous: null | String,
    results?: Result[];
}

export interface Result {
    name: String,
    model: String,
    starship_class: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    crew: String,
    passengers: String,
    max_atmosphering_speed: String,
    hyperdrive_rating: String,
    MGLT: String,
    cargo_capacity: String,
    consumables: String,
    films: Array<any>,
    pilots: Array<any>,
    url: String,
    created: String,
    edited: String,
}