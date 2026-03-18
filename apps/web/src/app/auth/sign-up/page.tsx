import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <h1 className="font-bold">Sign up to Orbits</h1>
        <p className="text-xs text-muted-foreground max-w-80 text-center">
          Be part of the Orbits community and start sharing your files with
          ease!
        </p>
      </div>
      <Button variant="outline" className="w-80 font-normal p-4">
        <Image
          className="p-1"
          src="/google-white-icon.webp"
          alt=""
          width={24}
          height={24}
        />
        Sign up with Google
      </Button>
      <Separator className="max-w-80" />
      <form>
        <FieldGroup className="w-80">
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" type="email" placeholder="email@example.com" />
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
          <Field>
            <FieldLabel htmlFor="confirm-password">Confirm Password</FieldLabel>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
          <Button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-300 font-normal p-4"
          >
            Create Account
            <ArrowRight />
          </Button>
        </FieldGroup>
      </form>
      <p className="text-xs text-muted-foreground">
        Already have an account?{' '}
        <Link href="/auth/sign-in" className="text-foreground hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
