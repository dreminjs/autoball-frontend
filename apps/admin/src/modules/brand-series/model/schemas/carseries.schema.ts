import z from 'zod';

export const carSeriesSchema = z.object({
  name: z.string({
    required_error: "Название обязательно",
    invalid_type_error: "Название должно быть строкой"
  })
  .min(2, { message: "Минимум 2 символа" })
  .max(50, { message: "Максимум 50 символов" })
  .trim(),

  from: z.string({
    required_error: "Год начала обязателен",
    invalid_type_error: "Год должен быть строкой"
  })
  .regex(/^\d{4}$/, { message: "Формат года: YYYY" })
  .refine(val => parseInt(val) >= 1900, { 
    message: "Год должен быть не ранее 1900" 
  }),

  to:z.string({
    required_error: "Год начала обязателен",
    invalid_type_error: "Год должен быть строкой"
  })
  .regex(/^\d{4}$/, { message: "Формат года: YYYY" })
  .refine(val => parseInt(val) <= 2100, { 
    message: "Год должен быть позднее 2100" 
  }),
});