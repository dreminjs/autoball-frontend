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
    inner: [
      { name: 'Машин', to: PAGE_URLS['car-brands'] },
      { name: 'Шин', to: PAGE_URLS['tier-brands'] },
      { name: 'Дисков', to: PAGE_URLS['disc-brands'] },
    ],
  },
] as INavItem[];
