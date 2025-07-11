import {
  BodyType,
  Currency,
  FuelType,
  GearboxType,
} from '@autoball-frontend/shared-types';
import { TTiresCar, TTiresSeason } from '../../../shared/types';
import { BrandType } from '../../../shared/types/brands/type';

export const bodyTypeOptions = [
  { value: 'sedan', label: 'Седан' },
  { value: 'hatchback', label: 'Хэтчбек' },
];

export const gearboxOptions = [
  { value: 'manual', label: 'Механическая' },
  { value: 'automatic', label: 'Автоматическая' },
];

export const fuelOptions = [
  { value: 'gasoline', label: 'Бензин' },
  { value: 'diesel', label: 'Дизель' },
];

export const conditionOptions = [
  { value: 'new', label: 'Новый' },
  { value: 'used', label: 'Б/У' },
];

export const fuelTitles: Record<FuelType, string> = {
  gasoline: 'Бензин',
  diesel: 'Дизель',
  hybrid: 'Гибрид',
  electric: 'Электро',
};

export const bodyTypeTitles: Record<BodyType, string> = {
  sedan: 'Седан',
  hatchback: 'Хэтчбек',
  coupe: 'Купе',
  universal: 'Универсал',
  minivan: 'Минивэн',
  jeep: 'Джип',
  minibus: 'Микроавтобус',
  convertible: 'Кабриолет',
  van: 'Фургон',
  liftback: 'Лифтбек',
  compact: 'Компактный',
  tractor: 'Трактор',
};

export const gearboxTitles: Record<GearboxType, string> = {
  manual: 'Механическая',
  automatic: 'Автоматическая',
  robotic: 'Роботизированная',
  variator: 'Вариатор',
};

export const currenciesOptions = ['USD', 'PLN'] as [Currency, Currency];

export const diameterOptions = [
  'R12',
  'R13',
  'R13C',
  'R14',
  'R14C',
  'R15',
  'R15C',
  'R16',
  'R16C',
  'R16.5',
  'R17',
  'R17.5',
  'R18',
  'R19',
  'R19.5',
  'R20',
  'R21',
  'R22',
  'R22.5',
  'R23',
  'R24',
  'R24.5',
] as const;

export const seasonsOptions = [
  "winter", "summer", "any"
] as [TTiresSeason,TTiresSeason,TTiresSeason]

export const tiresCarTypeOptions = [
  "passenger",
  "suv",
  "truck"
] as [TTiresCar,TTiresCar,TTiresCar]

export const currenciesLabels: Record<Extract<Currency, "USD" |  "PLN">, string> = {
  USD: 'Американский Доллар',
  PLN: 'Польский Злот',
};


export const typesBrandsLabels: Record<BrandType, string> = {
  tire: 'шин',
  disc: 'дисков',
  other: "другие"
}