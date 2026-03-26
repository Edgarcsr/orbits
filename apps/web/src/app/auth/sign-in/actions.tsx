'use server'

export async function signInWithEmail(data: FormData) {
  console.log(Object.fromEntries(data))
}
