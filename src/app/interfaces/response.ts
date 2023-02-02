import { IProduct } from "./product";

export interface IAPIResponse {
    count: number;
    products: Array<IProduct>
}