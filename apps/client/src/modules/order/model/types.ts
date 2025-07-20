import z from "zod"
import { orderSchema } from "./schema"

export type OrderForm = z.infer<typeof orderSchema>