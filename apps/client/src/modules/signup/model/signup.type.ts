import z from "zod"
import { signupSchema } from "./signup.schema"

export type TSignupForm = z.infer<typeof signupSchema>