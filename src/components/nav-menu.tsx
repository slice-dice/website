'use client'

import { MenuIcon, X } from 'lucide-react'
import { createContext, ReactElement, ReactNode, useContext, useState } from 'react'
import {
    NavMenuAccordion,
    NavMenuAccordionLink,
    NavMenuAccordionMenu,
    NavMenuAccordionTrigger,
    NavMenuLink,
} from './nav-menu-link'

import { routes } from '@/data/routes'

type MenuContextType = {
    isMenuOpen: boolean
    toggleMenu: () => void
}

const MenuContext = createContext<MenuContextType>({
    isMenuOpen: false,
    toggleMenu: () => {},
})

function MenuProvider({ children }: { children: ReactNode }): ReactElement {
    //
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const values = {
        isMenuOpen,
        toggleMenu,
    }

    return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
}

function useMenu(): MenuContextType {
    const context = useContext(MenuContext)
    if (context === undefined) {
        throw new Error('useNavbarResponsive must be used within a NavbarResponsiveProvider')
    }
    return context
}

function MenuToggle(): ReactElement {
    const { toggleMenu, isMenuOpen } = useMenu()

    return (
        <button
            id="menu-toggle"
            className="transition-color focus:border-dotted-2 m-0 ml-auto flex items-center gap-2 p-4 text-left text-[1.0625rem] duration-300 ease-in-out hover:text-[#CC4A49] focus:outline-hidden focus:ring-2 focus:ring-[#CC4A49] lg:hidden"
            aria-label="Menu"
            onClick={toggleMenu}
        >
            {isMenuOpen ? (
                <X size={28} className="m-0 block align-top" />
            ) : (
                <MenuIcon size={28} className="m-0 block align-top" />
            )}
            <span className="hidden sm:inline-flex">Menu</span>
        </button>
    )
}

function Menu() {
    const { isMenuOpen } = useMenu()

    return (
        <div className="relative mt-[2px] flex w-full lg:hidden">
            <nav
                id="menu"
                className={`transition-max-height w-full overflow-hidden duration-500 ease-in-out ${
                    isMenuOpen ? 'max-h-screen' : 'max-h-0'
                }`}
            >
                <ul className="m-0 mt-6 flex flex-col gap-2 p-0">
                    {routes.map(({ name, url, icon, items }, index) => {
                        // Build icon element
                        const Icon = icon

                        let Item

                        if (items && items.length > 0) {
                            Item = (
                                <NavMenuAccordion>
                                    <NavMenuAccordionTrigger>
                                        <Icon size={22} />
                                        {name}
                                    </NavMenuAccordionTrigger>
                                    <NavMenuAccordionMenu>
                                        {items.map((item, index) => (
                                            <NavMenuAccordionLink key={index} href={`/${url}/${item.url}`}>
                                                {item.name}
                                            </NavMenuAccordionLink>
                                        ))}
                                    </NavMenuAccordionMenu>
                                </NavMenuAccordion>
                            )
                        } else {
                            Item = (
                                <NavMenuLink href={`/${url}`}>
                                    <Icon size={22} />
                                    {name}
                                </NavMenuLink>
                            )
                        }

                        return (
                            <li className={`relative m-0`} key={index}>
                                {Item}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export function NavMenu(): ReactElement {
    return (
        <MenuProvider>
            <MenuToggle />
            <Menu />
        </MenuProvider>
    )
}
