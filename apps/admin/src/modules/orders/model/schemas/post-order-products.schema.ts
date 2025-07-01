
import * as z from 'zod';

export const PostOrderProductsSchema = z.object({
  user_phone: z.string().min(1, 'Телефон обязателен').max(20, 'Слишком длинный номер'),
  user_name: z.string().min(1, 'Имя обязательно').max(50, 'Слишком длинное имя'),
  description: z.string().max(500, 'Максимум 500 символов').optional()
});