export const API_URL = 'http://localhost:8000';

export const PAGE_URLS = {
  signin: '/',
  orders: 'orders',
  'car-brands': 'car-brands',
  'tier-brands': 'tier-brands',
  'disc-brands': 'disc-brands',
  product: 'product',
  carseries: 'carseries',
  brand: "brand",
  "carpart": "carpart"
} as const;

export const SERVICE_URLS = {
  auth: 'auth',
  users: 'user',
  orders: 'orders',
  carbrand: 'carbrand',
  product: 'product',
  carseries: 'carseries',
  storage: 'storage',
  "carpart": "carpart"
} as const;

export const QUERY_KEYS = {
  register: 'register',
  signin: 'sign-in',
  me: 'me',
  brand: 'brand',
  post: 'post',
  edit: 'edit',
  tire: 'tire',
  disc: 'disc',
  car: "car"
} as const;
