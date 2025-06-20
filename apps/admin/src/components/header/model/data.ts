import { PAGE_URLS, QUERY_KEYS } from '../../../shared/constants';
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
      { name: 'Машин', to: `${PAGE_URLS["brand"]}/${QUERY_KEYS.car}` },
      { name: 'Шин', to: `${PAGE_URLS["brand"]}/${QUERY_KEYS.tire}` },
      { name: 'Дисков', to: `${PAGE_URLS["brand"]}/${QUERY_KEYS.disc}` },
    ],
  },
] as INavItem[];
