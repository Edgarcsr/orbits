'use server'

import { z } from 'zod'

const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(1, 'Password is required'),
})

export async function signInWithEmail(_: unknown, data: FormData) {
  const parsedData = signInSchema.safeParse(Object.fromEntries(data))

  if (!parsedData.success) {
    const error = z.flattenError(parsedData.error).fieldErrors
    console.log(error)
    return { errors: error, values: parsedData.data }
  }
}
