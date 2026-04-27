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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { authClient } from '@/lib/auth-client'
import { UsageProgress } from './usage-progress'

export default function DashboardHeader() {
  const { data: session } = authClient.useSession()

  return (
    <div className="py-2 px-4 flex items-center gap-4 border-b">
      <Logo size={38} />
      <Separator orientation="vertical" className="h-8" />
      <div className="flex items-center gap-4 ml-auto">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button size={'icon'} variant={'outline'}>
                <ArrowUpFromLineIcon />
              </Button>
            }
          />
          <TooltipContent>Upload File</TooltipContent>
        </Tooltip>

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
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="group">
                Usage:
                <div className="ml-auto">
                  <UsageProgress percentage={12} size={20} />
                </div>
              </DropdownMenuItem>
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
