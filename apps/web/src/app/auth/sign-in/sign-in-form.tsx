'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, LoaderCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'

const signInFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

type SignInFormSchema = z.infer<typeof signInFormSchema>

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signInFormSchema),
  })

  async function onSubmit({ email, password }: SignInFormSchema) {
    await toast.promise(
      (async () => {
        const res = await authClient.signIn.email({
          email,
          password,
          callbackURL: `${window.location.origin}/dashboard`,
        })

        if (res?.error) {
          throw new Error(res.error.message)
        }

        return res
      })(),
      {
        loading: 'Accessing...',
        success: 'Welcome back!',
        error: (err) => err.message || 'Invalid credentials',
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="w-80">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            {...register('email')}
            id="email"
            type="email"
            placeholder="email@example.com"
          />
          <FieldError>{errors?.email?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            {...register('password')}
            id="password"
            type="password"
            placeholder="••••••••"
          />
          <FieldError>{errors?.password?.message}</FieldError>
        </Field>
        <Button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-300 font-normal p-4"
          disabled={isSubmitting}
        >
          Continue
          {isSubmitting ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <ArrowRight />
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
