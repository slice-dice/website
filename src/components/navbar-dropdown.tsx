'use client'

import Link from 'next/link'
import { createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'

import { useActiveLink } from '@/hooks/useActiveLink'

type NavbarDropdownContextType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    toggle: () => void
    hasActiveLink: boolean
    handleDropdownActiveLink: (v: boolean) => void
}

const NavbarDropdownContext = createContext<NavbarDropdownContextType>({
    isOpen: false,
    setIsOpen: () => {},
    toggle: () => {},
    hasActiveLink: false,
    handleDropdownActiveLink: () => {},
})

function NavbarDropdownProvider({ children }: { children: ReactNode }): ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const toggle = () => {
        // Close all other dropdowns when opening this one
        if (!isOpen) {
            const dropdowns = document.querySelectorAll('.navbar-dropdown')

            // check for each dropdown if it is open (dropdown-menu is visible) and close it by clicking the trigger
            dropdowns.forEach((dropdown) => {
                const trigger = dropdown.querySelector('.dropdown-trigger') as HTMLButtonElement
                const menu = dropdown.querySelector('.dropdown-menu') as HTMLDivElement

                if (menu.classList.contains('block')) {
                    trigger.click()
                }
            })
        }

        // Toggle this dropdown
        setIsOpen(!isOpen)
    }

    const [hasActiveLink, setHasActiveLink] = useState<boolean>(false)

    // When click outside this specific dropdown, close it
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (!target.closest('.navbar-dropdown')) {
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

    return <NavbarDropdownContext.Provider value={value}>{children}</NavbarDropdownContext.Provider>
}

function useNavbarDropdown(): NavbarDropdownContextType {
    const context = useContext(NavbarDropdownContext)
    if (context === undefined) {
        throw new Error('useNavbarDropdown must be used within a NavbarDropdownProvider')
    }
    return context
}

export function NavbarDropdown({ children }: { children: ReactNode }): ReactElement {
    return (
        <NavbarDropdownProvider>
            <div className="navbar-dropdown relative">{children}</div>
        </NavbarDropdownProvider>
    )
}

export function NavbarDropdownTrigger({ children }: { children: ReactNode }): ReactElement {
    const { toggle, isOpen, hasActiveLink } = useNavbarDropdown()

    return (
        <button
            className={`dropdown-trigger transition-color flex cursor-pointer items-center gap-2 duration-300 ease-in-out hover:text-[#CC4A49] ${isOpen ? 'text-[#CC4A49]' : ''} ${hasActiveLink && 'underline decoration-[3px] underline-offset-8'}`}
            onClick={toggle}
        >
            {children}
        </button>
    )
}

export function NavbarDropdownMenu({ children }: { children: ReactNode }): ReactElement {
    const { isOpen } = useNavbarDropdown()

    return (
        <div
            className={`dropdown-menu absolute right-0 top-full z-10 mt-2 w-full border border-gray-200 bg-white p-2 shadow-lg sm:w-64 ${isOpen ? 'block' : 'hidden'}`}
        >
            {children}
        </div>
    )
}

export function NavbarDropdownItem({ href, children }: { href: string; children: ReactNode }): ReactElement {
    const { handleDropdownActiveLink } = useNavbarDropdown()
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
