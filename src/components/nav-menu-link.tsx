'use client'

import { createContext, ReactElement, ReactNode, useContext, useState } from 'react'
import { useActiveLink } from '@/hooks/useActiveLink'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export function NavMenuLink({ href, children }: { href: string; children: ReactNode }): ReactElement {
    const { isActiveLink } = useActiveLink(href)

    return (
        <Link
            className={`transition-color flex items-center gap-2 border-t p-4 text-[1.0625rem] duration-300 ease-in-out hover:text-[#CC4A49] ${isActiveLink && 'underline decoration-1 underline-offset-4'}`}
            href={href}
        >
            {children}
        </Link>
    )
}

type NavMenuAccordionContextType = {
    isAccordionOpen: boolean
    toggleAccordion: () => void
}

const NavMenuAccordionContext = createContext<NavMenuAccordionContextType>({
    isAccordionOpen: false,
    toggleAccordion: () => {},
})

export function NavMenuAccordion({ children }: { children: ReactNode }): ReactElement {
    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false)
    const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen)

    const values = {
        isAccordionOpen,
        toggleAccordion,
    }

    return <NavMenuAccordionContext.Provider value={values}>{children}</NavMenuAccordionContext.Provider>
}

const useNavMenuAccordion = (): NavMenuAccordionContextType => {
    const context = useContext(NavMenuAccordionContext)
    if (context === undefined) {
        throw new Error('useNavMenuAccordion must be used within a NavMenuAccordionProvider')
    }
    return context
}

export function NavMenuAccordionTrigger({ children }: { children: ReactNode }): ReactElement {
    const { toggleAccordion, isAccordionOpen } = useNavMenuAccordion()

    return (
        <button
            className="transition-color flex w-full items-center gap-2 border-t p-4 text-[1.0625rem] duration-300 ease-in-out hover:text-[#CC4A49]"
            onClick={toggleAccordion}
        >
            {children}
            <ChevronDown
                size={16}
                className="m-0 ml-auto block transform align-top duration-300 ease-in-out"
                style={{ transform: isAccordionOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
        </button>
    )
}

export function NavMenuAccordionMenu({ children }: { children: ReactNode }): ReactElement {
    const { isAccordionOpen } = useNavMenuAccordion()

    return (
        <div
            className={`transition-max-height w-full overflow-hidden duration-500 ease-in-out ${
                isAccordionOpen ? 'max-h-screen' : 'max-h-0'
            }`}
        >
            {children}
        </div>
    )
}

export function NavMenuAccordionLink({ href, children }: { href: string; children: ReactNode }): ReactElement {
    const { toggleAccordion } = useNavMenuAccordion()
    const { isActiveLink } = useActiveLink(href)

    return (
        <Link
            className={`transition-color flex items-center gap-2 border-t p-4 pl-6 text-[1.0625rem] duration-300 ease-in-out hover:text-[#CC4A49] ${isActiveLink && 'text-[#CC4A49]'}`}
            href={href}
            onClick={toggleAccordion}
        >
            {children}
        </Link>
    )
}
