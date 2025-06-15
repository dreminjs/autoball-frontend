import {
  BodyType,
  FuelType,
  GearboxType,
} from '@autoball-frontend/shared-types';

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
