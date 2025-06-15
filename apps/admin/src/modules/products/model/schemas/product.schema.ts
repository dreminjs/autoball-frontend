import { z } from 'zod';

export const productSchema = z.object({
  OEM: z.string().min(1, 'Обязательное поле'),
  car_brand_id: z.string().uuid('Некорректный ID'),
  car_series_id: z.string().uuid('Некорректный ID'),
  car_part_id: z.string().uuid('Некорректный ID'),
  year: z
    .number({message: "Обязательное поле"})
    .min(1950, 'Год должен быть не ранее 1950')
    .max(new Date().getFullYear()),
  type_of_body: z.enum([
    'sedan',
    'hatchback',
    'coupe',
    'universal',
    'minivan',
    'jeep',
    'minibus',
    'convertible',
    'van',
    'liftback',
    'compact',
    'tractor',
  ]),
  volume: z.number({message: "Обязательное поле"}).min(0),
  gearbox: z.enum(['manual', 'automatic', 'robotic', 'variator']),
  fuel: z.enum(['gasoline', 'diesel', 'hybrid', 'electric']),
  engine_type: z.string().optional(),
  VIN: z.string().optional(),
  pictures: z.array(z.string().url('Некорректный URL изображения')).optional(),
  note: z.string().optional(),
  description: z.string().optional(),
  real_price: z.number({message: "Обязательное поле"}).min(0),
  fake_price: z.number({message: "Обязательное поле"}).min(0),
  condition: z.enum(['used', 'new']),
  count: z.number().min(1, 'Минимальное количество: 1'),
});
