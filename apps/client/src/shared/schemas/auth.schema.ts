import z from "zod";

export const authSchema = z.object({
  phone_number: z.string()
    .min(1, "Поле обязательно для заполнения"),
  password: z.string()
  .min(1, "Поле обязательно для заполнения")
  .min(5, "Пароль должен содержать минимум 5 символов")
});