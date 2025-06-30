import { PAGE_URLS, QUERY_KEYS } from '../../../shared/constants';
import { INavItem } from './types/nav-item';

export const items = [
  {
    name: 'Товары',
    to: PAGE_URLS['product'],
  },
  {
    name: 'Заказы',
    to: PAGE_URLS['orders'],
  },
  {
    name: "Пользователи",
    to: PAGE_URLS.user
  },
  {
    name: 'Характеристики',
    inner: [
      { name: 'Бренды Машин', to: `${PAGE_URLS["brand"]}/${QUERY_KEYS.car}` },
      { name: 'Бренды Шин', to: `${PAGE_URLS["brand"]}/${QUERY_KEYS.tire}` },
      { name: 'Бренды Дисков', to: `${PAGE_URLS["brand"]}/${QUERY_KEYS.disc}` },
      { name: 'Типы запчасть', to: PAGE_URLS["carpart"]  }
    ],
  },
  
] as INavItem[];
