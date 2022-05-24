export interface ListStarshipTypes {
    count: number,
    next: null | string,
    previous: null | string,
    results?: StarshipTypes[];
}

export interface StarshipTypes {
    name: string,
    model: string,
    starship_class: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    hyperdrive_rating: string,
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    films: Array<any>,
    pilots: Array<any>,
    url: string,
    created: string,
    edited: string,
}