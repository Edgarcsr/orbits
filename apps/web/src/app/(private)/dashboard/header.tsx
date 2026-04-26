'use client'

import { ArrowLeftToLine, ArrowUpFromLineIcon } from 'lucide-react'
import Logo from '@/components/logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { authClient } from '@/lib/auth-client'

export default function DashboardHeader() {
  const { data: session, isPending } = authClient.useSession()

  return (
    <div className="py-2 px-4 flex items-center gap-4 border-b">
      <Logo size={38} />
      <Separator orientation="vertical" className="h-8" />
      <div className="flex items-center gap-4 left-0">
        <Button className="bg-amber-300">
          <ArrowUpFromLineIcon />
          Upload file
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session?.user?.image || ''} />
              <AvatarFallback>
                {session?.user?.name
                  ?.split(' ')
                  .map((n) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Usage</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="text-red-400"
                onClick={() => {
                  authClient.signOut()
                }}
              >
                <ArrowLeftToLine />
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
