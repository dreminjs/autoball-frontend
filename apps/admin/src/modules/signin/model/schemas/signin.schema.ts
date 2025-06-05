

import { z } from "zod"


export const signinSchema = z.object({
  email: z.string()
    .min(1, "Поле обязательно для заполнения")
    .email("Введите корректный email"),
    
  password: z.string()
  .min(1, "Поле обязательно для заполнения")
  .min(5, "Пароль должен содержать минимум 5 символов")
});