'use client'

import { ReactElement, ReactNode } from 'react'
import { useActiveLink } from '@/hooks/useActiveLink'
import Link from 'next/link'

export function NavLink({ href, children }: { href: string; children: ReactNode }): ReactElement {
    const { isActiveLink } = useActiveLink(href)

    return (
        <Link
            className={`transition-color flex items-center gap-2 duration-300 ease-in-out hover:text-[#CC4A49] ${isActiveLink && 'underline decoration-[3px] underline-offset-8'}`}
            href={href}
        >
            {children}
        </Link>
    )
}
