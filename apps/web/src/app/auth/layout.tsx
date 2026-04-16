import { Toaster } from '@/components/ui/sonner'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <div>{children}</div>
      <Toaster position="bottom-right" />
    </main>
  )
}
