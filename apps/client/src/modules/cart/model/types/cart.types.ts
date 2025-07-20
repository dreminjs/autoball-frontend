
export interface ICartItem  {
    id: string,
    picture: string,
    product_id: string,
    article: string,
    car_brand_name: string,
    car_series_name: string,
    car_part_type: string,
    price: number,
    discount: number
}

export interface IPostCartItemDto { 
    id: string,
    picture: string,
    product_id: string,
    article: string,
    car_brand_name: string,
    car_series_name: string,
    car_part_type: string,
    price: number,
    discount: number
}