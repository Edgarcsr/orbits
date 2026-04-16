import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SignInForm from './sign-in-form'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <h1 className="font-bold">Sign In to Orbits</h1>
        <p className="text-xs text-muted-foreground">
          Welcome back, let's upload!
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
        Sign in with Google
      </Button>
      <Separator className="max-w-80" />
      <SignInForm />
      <p className="text-xs text-muted-foreground">
        Don't have an account?{' '}
        <Link href="/auth/sign-up" className="text-foreground hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  )
}
