'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

type UseActiveLink = {
    isActiveLink: boolean
}

export function useActiveLink(href: string): UseActiveLink {
    const pathname = usePathname()

    const isActiveLink = useMemo(() => {
        return pathname === href
    }, [pathname, href])

    return { isActiveLink }
}
