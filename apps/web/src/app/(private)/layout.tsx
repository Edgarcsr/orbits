'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { authClient } from '@/lib/auth-client'

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    if (!isPending && !session) {
      router.push('/auth/sign-in')
    }
  }, [isPending, session, router])

  return <div>{children}</div>
}
