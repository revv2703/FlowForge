'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { menuOptions } from '@/lib/constant'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { Separator } from '../ui/separator'
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react'
import { ModeToggle } from '../global/mode-toggle'


type Props = {}

const MenuOptions = (props: Props) => {
  
  const pathName = usePathname()
  return (
    <nav className='dark:bg-black h-screen justify-between flex items-center flex-col gap-10 py-6 px-2'>
      {/* Removed  overflow-scroll as it is messing up the layout. */}
      <div className="flex items-center justify-center flex-col gap-6">
        <Link className='flex font-bold flex-row' href="/">
          FlowForge
        </Link>
        <AnimatedTooltip items={menuOptions} />
        <Separator />
        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick
              className="dark:text-white"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database
              className="text-muted-foreground"
              size={18}
            />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch
              className="text-muted-foreground"
              size={18}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8 -mt-4">
        <ModeToggle />
      </div>
    </nav>
  )
}

export default MenuOptions