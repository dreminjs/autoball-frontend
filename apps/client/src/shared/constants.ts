import { Code, Currency } from "@autoball-frontend/shared-types";

export const API_URL = 'http://localhost:8000';

export const PAGE_URLS = {
  signin: "signin",
  signup: "signup",
  orders: 'orders',
  'car-brands': 'car-brands',
  'tier-brands': 'tier-brands',
  'disc-brands': 'disc-brands',
  product: 'product',
  carseries: 'carseries',
  brand: "brand",
  "carpart": "carpart",
  "user": "user"
  
} as const;

export const SERVICE_URLS = {
  auth: 'auth',
  orders: 'order',
  carbrand: 'carbrand',
  product: 'product',
  carseries: 'carseries',
  storage: 'storage',
  "carpart": "carpart",
  "user": "user",
  "cart":"cart"
} as const;

export const QUERY_KEYS = {
  register: 'register',
  signin: 'sign-in',
  signout: 'sign-out',
  signup: 'register',
  me: 'me',
  brand: 'brand',
  post: 'post',
  edit: 'edit',
  tire: 'tirebrand',
  disc: 'discbrand',
  car: "car",
  "private": "private",
  "public": "public",
  "toggle_printed_status": "toggle_printed_status",
  "toggle_availible_status": "toggle_availible_status",
  "items": "items"
} as const;



export const CURRENCY_CODES: Record<Extract<Currency, "EUR" | "BYN" | "RUB" | "USD">, Code> = {
  "BYN": 0, // LATER
  "EUR": 451,
  "RUB": 456,
  "USD": 431
} as const