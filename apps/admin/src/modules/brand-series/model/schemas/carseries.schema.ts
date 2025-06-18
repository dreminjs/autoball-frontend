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

export const updateCarSeriesSchema = z.object({
  name: z.string({
    invalid_type_error: "Название должно быть строкой"
  })
  .min(2, { message: "Минимум 2 символа" })
  .max(50, { message: "Максимум 50 символов" })
  .trim()
  .optional(),

  from: z.string({
    invalid_type_error: "Год должен быть строкой"
  })
  .regex(/^\d{4}$/, { message: "Формат года: YYYY" })
  .refine(val => parseInt(val) >= 1900, { 
    message: "Год должен быть не ранее 1900" 
  })
  .optional(),

  to: z.string({
    invalid_type_error: "Год должен быть строкой"
  })
  .regex(/^\d{4}$/, { message: "Формат года: YYYY" })
  .refine(val => parseInt(val) <= 2100, { 
    message: "Год должен быть не позднее 2100" 
  })
  .optional(),
})
.refine(data => {
  if (data.from && data.to) {
    return parseInt(data.from) <= parseInt(data.to);
  }
  return true;
}, {
  message: "Год начала должен быть меньше года окончания",
  path: ["to"] // Показываем ошибку у поля "to"
})
.refine(data => {
  return data.name !== undefined || data.from !== undefined || data.to !== undefined;
}, {
  message: "Необходимо указать хотя бы одно поле для обновления",
});