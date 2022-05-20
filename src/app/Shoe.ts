export type Shoe = {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
}

export type ShoeResponse = {
    products: Shoe[];
}