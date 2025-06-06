import z from "zod";

export const carBrandSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  picture: z.instanceof(File)
    .refine(file => file.size <= 5 * 1024 * 1024, 'Max file size is 5MB')
    .refine(file => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type), {
    message: 'Only .jpg, .png and .webp formats are supported'
  })
});