import { PAGE_URLS } from '../../../shared/constants';
import { INavItem } from './types/nav-item';

export const items = [
  {
    name: 'Запчасти',
    to: PAGE_URLS['product'],
  },
  {
    name: 'Заказы',
    to: PAGE_URLS['orders'],
  },
  {
    name: 'Бренды',
    to: PAGE_URLS['car-brands'],
  },
] as INavItem[];
