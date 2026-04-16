import Navbar from './navbar'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="m-auto flex flex-col min-h-screen">
      {/* <LightRays /> */}
      <Navbar />
      <div className="flex-1">{children}</div>
    </main>
  )
}
