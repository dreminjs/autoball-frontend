import { z } from "zod";
import { carSeriesSchema, updateCarSeriesSchema } from "../schemas/carseries.schema";

export type IPostCarSeriesForm = z.infer<typeof carSeriesSchema>

export type IPostCarSeriesDto = Omit<IPostCarSeriesForm,"from" | "to"> & {
    car_brand_id: string
    year: string // EXAMPLE: 1999-2000
}

export type IEditCarSeriesDto = Partial<IPostCarSeriesForm>

export type IEditCarSeriesForm= z.infer<typeof updateCarSeriesSchema>