import z from 'zod';

export const carSeriesSchema = z.object({
  name: z.string(),
  from: z.string(),
  to: z.string(),
});
