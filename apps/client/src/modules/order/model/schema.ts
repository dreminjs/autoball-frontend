
import z from "zod"

export const orderSchema = z.object({
  user_name: z.string().min(1, "Имя обязательно"),
  user_phone: z.string().min(10, "Телефон должен содержать минимум 10 символов"),
  description: z.string(),
  city_to_ship: z.string().min(1, "Город обязателен"),
  adress_to_ship: z.string().min(1, "Адрес обязателен"),
  postal_code: z.string().min(5, "Почтовый индекс должен содержать минимум 5 символов")
});