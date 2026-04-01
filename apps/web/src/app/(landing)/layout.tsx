import { LightRays } from '@/components/ui/light-rays'
import Navbar from './navbar'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="m-auto flex flex-col">
      <LightRays />
      <Navbar />
      {children}
    </main>
  )
}
