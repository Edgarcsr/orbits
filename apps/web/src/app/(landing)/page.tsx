'use client'
import AuroraBackground from './aurora-background'
import Clients from './clients'
import Hero from './hero'

export default function Home() {
  return (
    <div className="relative">
      <AuroraBackground />
      <div className="max-w-6xl m-auto relative z-10 pt-32">
        <Hero />
        <Clients />
      </div>
    </div>
  )
}
