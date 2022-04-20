export interface Product {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    discount?: number;
    priceDiscount?: number;
    rating: number;
    link: string;
}