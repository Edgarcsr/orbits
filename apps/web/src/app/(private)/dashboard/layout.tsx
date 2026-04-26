'use client'

import DashboardHeader from './header'

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <DashboardHeader />
      {children}
    </div>
  )
}
