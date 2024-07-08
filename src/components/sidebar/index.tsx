'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { menuOptions } from '@/lib/constant'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { Separator } from '../ui/separator'


type Props = {}

const MenuOptions = (props: Props) => {
  
  const pathName = usePathname()
  return (
    <nav className='dark:bg-black h-screen justify-between flex items-center flex-col gap-10 py-6 px-2'>
      {/* Removed  overflow-scroll as it is messing up the layout. */}
      <div className="flex items-center justify-center flex-col gap-8">
        <Link className='flex font-bold flex-row' href="/">
          FlowForge
        </Link>
        <AnimatedTooltip items={menuOptions} />
        <Separator />
      </div>
    </nav>
  )
}

export default MenuOptions