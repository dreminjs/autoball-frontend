import z from "zod";



export const EditWheelComponentBrandSchema = z.object({
  name: z.string().min(1, "Название обязательно"),
});

export type IEditWheelComponentBrand = z.infer<typeof EditWheelComponentBrandSchema>