import z from "zod";



export const PostWheelComponentBrandSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Название обязательно"),
});

export type IPostWheelComponentBrand = z.infer<typeof PostWheelComponentBrandSchema>