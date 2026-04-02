'use client'

import Aurora from '@/components/react-bits/Aurora'

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none top-0 left-0">
      <Aurora
        colorStops={['#f09b24', '#f09b23', '#f09b23']}
        blend={0.95}
        amplitude={1.0}
        speed={0.5}
      />
    </div>
  )
}
