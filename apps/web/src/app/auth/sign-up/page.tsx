import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SignUpForm from './sign-up-form'

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function SignUpPage() {
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
      <SignUpForm />
      <p className="text-xs text-muted-foreground">
        Already have an account?{' '}
        <Link href="/auth/sign-in" className="text-foreground hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
