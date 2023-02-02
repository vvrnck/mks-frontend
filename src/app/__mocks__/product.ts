import { IProduct } from "../interfaces/product"
import { IAPIResponse } from "../interfaces/response"

export const MockedProduct : IProduct = {
    "id": 1,
    "name": "Iphone 11 128 GB",
    "brand": "Apple",
    "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
    "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
    "price": "5000.00",
    "createdAt": "2023-01-23T18:17:04.771Z",
    "updatedAt": "2023-01-23T18:17:04.771Z"
}

export const MockedProducts : IAPIResponse = {
    products: [
        {
            "id": 1,
            "name": "Iphone 11 128 GB",
            "brand": "Apple",
            "description": "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
            "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/iphone11x128.webp",
            "price": "5000.00",
            "createdAt": "2023-01-23T18:17:04.771Z",
            "updatedAt": "2023-01-23T18:17:04.771Z"
        },
        {
            "id": 2,
            "name": "AirPods",
            "brand": "Apple",
            "description": "Criados pela Apple Ligam e se conectam automaticamente Configuração com apenas um toque para todos seus aparelhos Apple.",
            "photo": "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/airpods.webp",
            "price": "1200.00",
            "createdAt": "2023-01-23T18:17:04.771Z",
            "updatedAt": "2023-01-23T18:17:04.771Z"
        }
    ],
    count: 2
}