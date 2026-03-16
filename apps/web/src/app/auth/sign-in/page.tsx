import Logo from '@/components/logo'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SignInPage() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
      <div className="flex flex-col items-center justify-center">
        <Logo />
        <h1 className="font-bold">Sign In to Orbits</h1>
        <p className="text-xs text-muted-foreground">
          Welcome back, let's upload!
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="email@example.com" />
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="••••••••" type="password" />
      </form>
    </div>
  )
}
