'use client'
import AuroraBackground from './aurora-background'
import Hero from './hero'

export default function Home() {
  return (
    <div className="relative">
      <AuroraBackground />
      <div className="max-w-6xl m-auto relative z-10">
        <Hero />
        {/* <DataSection /> */}
      </div>
    </div>
  )
}
