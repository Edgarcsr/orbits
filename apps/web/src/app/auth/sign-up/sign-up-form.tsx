'use client'

import { ArrowRight } from 'lucide-react'
import { useActionState, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { signUpWithEmail } from './actions'

export default function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUpWithEmail, null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const doesPasswordsMatch = password === confirmPassword

  return (
    <form action={formAction}>
      <FieldGroup className="w-80">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError>{state?.errors?.email?.[0]}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FieldError>{state?.errors?.password?.[0]}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FieldError>
            {state?.errors?.confirmPassword?.[0] ||
              (password && confirmPassword && !doesPasswordsMatch
                ? 'Passwords do not match'
                : null)}
          </FieldError>
        </Field>
        <Button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-300 font-normal p-4"
          disabled={isPending}
        >
          {isPending ? 'Creating...' : 'Create Account'}
          <ArrowRight />
        </Button>
      </FieldGroup>
    </form>
  )
}
