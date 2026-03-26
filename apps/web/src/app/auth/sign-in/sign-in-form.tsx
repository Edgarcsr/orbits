import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { signInWithEmail } from './actions'

export default function SignInForm() {
  return (
    <form action={signInWithEmail}>
      <FieldGroup className="w-80">
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="email@example.com"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="••••••••"
          />
        </Field>
        <Button
          type="submit"
          className="w-full bg-amber-400 hover:bg-amber-300 font-normal p-4"
        >
          Continue
          <ArrowRight />
        </Button>
      </FieldGroup>
    </form>
  )
}
