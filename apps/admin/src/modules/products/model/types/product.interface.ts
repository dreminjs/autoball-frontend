
import { z } from "zod"
import { productSchema } from "../schemas/product.schema";

export type ProductFormData = z.infer<typeof productSchema>;

