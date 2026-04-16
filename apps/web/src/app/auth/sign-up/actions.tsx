'use server'

import { z } from 'zod'

const signUpSchema = z.object({
  email: z.email(),
  password: z.string().min(1, 'Password is required'),
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
})

export async function signUpWithEmail(_: unknown, data: FormData) {
  const parsedData = signUpSchema.safeParse(Object.fromEntries(data))

  if (!parsedData.success) {
    const error = z.flattenError(parsedData.error).fieldErrors
    console.log(error)
    return { errors: error, values: parsedData.data }
  }
}
