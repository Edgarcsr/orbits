import { LightRays } from '@/components/ui/light-rays'
import Navbar from './navbar'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="w-7xl m-auto flex flex-col mt-16">
      <LightRays />
      <Navbar />
      {children}
    </main>
  )
}
