import z from 'zod';

export const carBrandSchema = z.object({
  name: z.string().min(2, 'Минимум 2 символа').max(50, 'Максимум 50 символов'),
  brand_logo: z
    .instanceof(File, { message: 'Загрузка обязательна' })
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      'Максимальный размер файла 5MB'
    )
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      {
        message: 'Только .jpg, .png and .webp поддерживаются',
      }
    ),
});
