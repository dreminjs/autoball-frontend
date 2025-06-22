import z from "zod";

export const EditCarPartSchema = z.object({
  name: z.string().min(1, "Название обязательно"),
});

export type IEditCarPart = z.infer<typeof EditCarPartSchema>