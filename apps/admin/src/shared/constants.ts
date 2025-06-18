
export const API_URL = "http://localhost:8000"

export const PAGE_URLS = {
    "signin": "/",
    "orders": "orders",
    "car-brands": "car-brands",
    "product": "product",
    "carseries": "carseries"
} as const


export const SERVICE_URLS = {
    "auth": "auth",
    "users": "user",
    "orders": "orders",
    "carbrand": "carbrand",
    "product": "product",
    "carseries": "carseries",
    "storage": "storage"
} as const

export const QUERY_KEYS = {
    "register": "register",
    "signin": "sign-in",
    "me": "me",
    "brand": "brand",
    "post":"post",
    "edit":"edit"
} as const