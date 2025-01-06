'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactElement, ReactNode, useMemo } from 'react'

export function NavLink({ href, children }: { href: string; children: ReactNode }): ReactElement {
    const pathname = usePathname()

    const isActive = useMemo(() => {
        return pathname === href
    }, [pathname, href])

    return (
        <Link
            className={`transition-color flex items-center gap-2 duration-300 ease-in-out hover:text-[#CC4A49] ${isActive && 'underline decoration-[3px] underline-offset-8'}`}
            href={href}
        >
            {children}
        </Link>
    )
}
