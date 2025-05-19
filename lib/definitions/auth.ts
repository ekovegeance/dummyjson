import { z } from 'zod'

export const SignInFormSchema = z.object({
    username: z.string().min(2, { message: 'Be at least 2 characters long' }),
    password: z
        .string()
        .min(6, { message: 'Be at least 6 characters long' })

})

export type FormState =
    | {
    errors?: {
        username?: string[]
        password?: string[]
    }
    message?: string
}
    | undefined