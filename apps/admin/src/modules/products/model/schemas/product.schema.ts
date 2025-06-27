import { z } from 'zod';
import { currenciesOptions, diameterOptions } from '../data';

export const productSchema = z
  .object({
    OEM: z.string().min(1, 'Обязательное поле'),
    car_brand_id: z.string().uuid('Некорректный ID'),
    car_series_id: z.string().uuid('Некорректный ID'),
    car_part_id: z.string().uuid('Некорректный ID'),
    currency: z.enum(currenciesOptions),
    year: z
      .number({ message: 'Обязательное поле' })
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
    volume: z.number({ message: 'Обязательное поле' }).min(0),
    gearbox: z.enum(['manual', 'automatic', 'robotic', 'variator']),
    fuel: z.enum(['gasoline', 'diesel', 'hybrid', 'electric']),
    engine_type: z.string().optional(),
    VIN: z.string().optional(),
    pictures: z
      .array(z.string().url('Некорректный URL изображения'))
      .optional(),
    note: z.string().optional(),
    description: z.string().optional(),
    real_price: z.number({ message: 'Обязательное поле' }).min(0),
    fake_price: z.number({ message: 'Обязательное поле' }).min(0),
    condition: z.enum(['used', 'new']),
    count: z.number().min(1, 'Минимальное количество: 1'),
    productType: z.enum(['tire', 'disc', 'car'], {
      required_error: 'Выберите тип продукта',
    }),    
    tires_diametr: z.enum(diameterOptions).optional(),
    tires_width: z.number().optional(),
    tires_height: z.number().optional(),
    tires_index: z.string().optional(),
    tires_car_type: z.enum(['passenger', 'truck', 'commercial']).optional(),
    tire_brand_id: z.string().uuid('Некорректный ID').optional(),
    tires_model: z.string().optional(),
    tires_season: z.enum(['winter', 'summer', 'all_season']).optional(),
    tires_residue: z.number().min(0).max(100).optional(),
    disc_diametr: z.enum(diameterOptions).optional(),
    disc_width: z.number().optional(),
    disc_ejection: z.number().optional(),
    disc_dia: z.number().optional(),
    disc_holes: z.number().optional(),
    disc_pcd: z.number().optional(),
    disc_brand_id: z.string().uuid('Некорректный ID').optional(),
    disc_model: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.productType === 'tire') {
      if (!data.tires_diametr) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Обязательное поле',
          path: ['tires_diametr'],
        });
      }
    }

    if (data.productType === 'disc') {
      if (!data.disc_diametr) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Обязательное поле',
          path: ['disc_diametr'],
        });
      }
    }
  });

// Обновите тип ProductFormData
export type ProductFormData = z.infer<typeof productSchema>;