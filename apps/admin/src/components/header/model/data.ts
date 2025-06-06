import { PAGE_URLS } from '../../../shared/constants';
import { INavItem } from './types/nav-item';

export const items = [
  {
    name: 'Бренды',
    to: PAGE_URLS['car-brands'],
  },
  {
    name: 'Запчасти',
    to: PAGE_URLS['products'],
  },
  {
    name: 'Заказы',
    to: PAGE_URLS['orders'],
  },
  {
    name: 'Серии',
    to: PAGE_URLS['series'],
  },
] as INavItem[];
