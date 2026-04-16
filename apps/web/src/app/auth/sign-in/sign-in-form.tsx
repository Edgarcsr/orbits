'use client'

import { ArrowRight, LoaderCircle } from 'lucide-react'
import { useActionState, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { signInWithEmail } from './actions'

export default function SignInForm() {
  const [state, formAction, isPending] = useActionState(signInWithEmail, null)
  const [email, setEmail] = useState('')

  return (
    <form action={formAction}>
      <FieldGroup className="w-80">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FieldError>{state?.errors.email}</FieldError>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="••••••••"
          />
          <FieldError>{state?.errors.password}</FieldError>
        </Field>
        <Button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-300 font-normal p-4"
          disabled={isPending}
        >
          Continue
          {isPending ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <ArrowRight />
          )}
        </Button>
      </FieldGroup>
    </form>
  )
}
