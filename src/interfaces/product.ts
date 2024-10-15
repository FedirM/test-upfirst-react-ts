export interface Product {
    title: String,
    price: Number,
    description: String,
    image: String,
    category: String,
    rating: {
        count: number,
        rate: number
    }
}