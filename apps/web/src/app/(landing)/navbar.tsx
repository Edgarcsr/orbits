'use client'

import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'circOut', duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="m-auto max-w-7xl px-2 py-2 flex flex-row justify-between items-center ">
        <Logo />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-rows-2 grid-cols-2 gap-4 p-4">
                  <li className="row-span-2">
                    <NavigationMenuLink href="/">
                      <div className="flex flex-col max-w-32">
                        <Logo />
                        <span>What is Orbits</span>
                        <p className="text-sm text-muted-foreground">
                          your solution for project management.
                        </p>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className="bg-orbit-500 hover:bg-amber-300">
          Open account
          <ChevronRight className="ml-2 size-4" />
        </Button>
      </div>
    </motion.div>
  )
}
