import z from "zod";
import { carBrandSchema } from "../schemas/car-brand.schema";


export type CarBrandForm = z.infer<typeof carBrandSchema>;