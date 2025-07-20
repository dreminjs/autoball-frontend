import z from "zod"
import { authSchema } from "../schemas/auth.schema"

export type AuthForm = z.infer<typeof authSchema>