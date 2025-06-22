import z from "zod";

export const PostCarPartSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Название обязательно"),
});

export type IPostCarPart = z.infer<typeof PostCarPartSchema >