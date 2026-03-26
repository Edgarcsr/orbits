import Navbar from './navbar'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="w-7xl m-auto flex flex-col mt-16">
      <Navbar />
      {children}
    </main>
  )
}
