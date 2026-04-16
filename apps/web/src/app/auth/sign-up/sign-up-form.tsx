'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
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

const signUpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email(),
  password: z.string().min(1, 'Password is required'),
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
})

type SignUpFormSchema = z.infer<typeof signUpSchema>

export default function SignUpForm() {
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const doesPasswordsMatch = password === confirmPassword

  async function onSubmit({ name, email, password }: SignUpFormSchema) {
    await toast.promise(
      async () => {
        const res = await authClient.signUp.email({
          name,
          email,
          password,
        })

        if (res.error) {
          throw new Error(res.error.message || 'Error creating account')
        }

        return res
      },
      {
        loading: 'Creating account...',
        error: (err) => err.message || 'Error creating account',
        success: 'Account created successfully!',
      },
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup className="w-80">
        <Field>
          <FieldLabel htmlFor="name">Name</FieldLabel>
          <Input
            id="name"
            {...register('name')}
            type="name"
            placeholder="John Doe"
          />
          <FieldError>{errors.name?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            {...register('email')}
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError>{errors.email?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            {...register('password')}
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FieldError>{errors.password?.message}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input
            id="confirm-password"
            {...register('confirmPassword')}
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FieldError>
            {errors.confirmPassword?.message ||
              (password && confirmPassword && !doesPasswordsMatch
                ? 'Passwords do not match'
                : null)}
          </FieldError>
        </Field>
        <Button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-300 font-normal p-4"
          disabled={isSubmitting || !doesPasswordsMatch}
        >
          {isSubmitting ? 'Creating...' : 'Create Account'}
          <ArrowRight />
        </Button>
      </FieldGroup>
    </form>
  )
}
