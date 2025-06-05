
export const API_URL = "http://localhost:8000"

export const PAGE_URLS = {
    "signin": "/",
    "orders": "orders",
    "car-brands": "car-brands"
} as const

export const SERVICE_URLS = {
    "auth": "auth",
    "users": "user",
    "orders": "orders"

} as const

export const QUERY_KEYS = {
    "register": "register",
    "signin": "sign-in",
    "me": "me",
} as const