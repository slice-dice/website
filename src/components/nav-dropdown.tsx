'use client'

import Link from 'next/link'
import { createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'

import { useActiveLink } from '@/hooks/useActiveLink'

type NavDropdownContextType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    toggle: () => void
    hasActiveLink: boolean
    handleDropdownActiveLink: (v: boolean) => void
}

const NavDropdownContext = createContext<NavDropdownContextType>({
    isOpen: false,
    setIsOpen: () => {},
    toggle: () => {},
    hasActiveLink: false,
    handleDropdownActiveLink: () => {},
})

function NavDropdownProvider({ children }: { children: ReactNode }): ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggle = () => setIsOpen(!isOpen)

    const [hasActiveLink, setHasActiveLink] = useState<boolean>(false)

    // When click outside the dropdown, close it
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest('.nav-dropdown')) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    // When press ESC key, close the dropdown
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    const handleDropdownActiveLink = (v: boolean) => {
        setHasActiveLink(v)
    }

    const value = {
        isOpen,
        setIsOpen,
        toggle,
        hasActiveLink,
        handleDropdownActiveLink,
    }

    return <NavDropdownContext.Provider value={value}>{children}</NavDropdownContext.Provider>
}

function useNavDropdown(): NavDropdownContextType {
    const context = useContext(NavDropdownContext)
    if (context === undefined) {
        throw new Error('useNavDropdown must be used within a NavDropdownProvider')
    }
    return context
}

export function NavDropdown({ children }: { children: ReactNode }): ReactElement {
    return (
        <NavDropdownProvider>
            <div className="nav-dropdown">{children}</div>
        </NavDropdownProvider>
    )
}

export function NavDropdownTrigger({ children }: { children: ReactNode }): ReactElement {
    const { toggle, isOpen, hasActiveLink } = useNavDropdown()

    return (
        <button
            className={`transition-color flex items-center gap-2 duration-300 ease-in-out hover:text-[#CC4A49] ${isOpen ? 'text-[#CC4A49]' : ''} ${hasActiveLink && 'underline decoration-[3px] underline-offset-8'}`}
            onClick={toggle}
        >
            {children}
        </button>
    )
}

export function NavDropdownMenu({ children }: { children: ReactNode }): ReactElement {
    const { isOpen } = useNavDropdown()

    return (
        <div
            className={`absolute right-0 top-full z-10 mt-2 w-full rounded-lg border border-gray-200 bg-white p-2 shadow-lg sm:w-64 ${isOpen ? 'block' : 'hidden'}`}
        >
            {children}
        </div>
    )
}

export function NavDropdownItem({ href, children }: { href: string; children: ReactNode }): ReactElement {
    const { handleDropdownActiveLink } = useNavDropdown()
    const { isActiveLink } = useActiveLink(href)

    useEffect(() => {
        handleDropdownActiveLink(isActiveLink)
    }, [isActiveLink, handleDropdownActiveLink])

    return (
        <Link
            className={`transition-color flex items-center gap-2 p-4 duration-300 ease-in-out hover:text-[#CC4A49] ${isActiveLink && 'text-[#CC4A49]'}`}
            href={href}
        >
            {children}
        </Link>
    )
}
