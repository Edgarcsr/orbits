'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { authClient } from '@/lib/auth-client'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    if (!isPending && session) {
      router.push('/dashboard')
    }
  }, [isPending, session, router])

  return (
    <main>
      <div>{children}</div>
      <Toaster position="bottom-right" />
    </main>
  )
}
