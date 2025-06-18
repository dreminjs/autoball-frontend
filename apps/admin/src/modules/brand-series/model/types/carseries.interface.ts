import { z } from "zod";
import { carSeriesSchema, updateCarSeriesSchema } from "../schemas/carseries.schema";

export type ICreateCarSeriesForm = z.infer<typeof carSeriesSchema>

export type ICreateCarSeriesDto = Omit<ICreateCarSeriesForm,"from" | "to"> & {
    car_brand_id: string
    year: string // EXAMPLE: 1999-2000
}

export type IUpdateCarSeriesDto = Partial<ICreateCarSeriesDto>

export type IUpdateCarSeriesForm= z.infer<typeof updateCarSeriesSchema>