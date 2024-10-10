import { Product } from "../interfaces/product";

export function fetchAllProducts(): Promise<Array<Product>> {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
            .then(res => resolve(res.json()))
            .catch(reject)
    })
}