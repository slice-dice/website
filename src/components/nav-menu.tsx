'use client'

import { BookText, CircleHelp, HomeIcon, MenuIcon, X } from 'lucide-react'
import { createContext, ReactElement, ReactNode, useContext, useState } from 'react'
import {
    NavMenuAccordion,
    NavMenuAccordionLink,
    NavMenuAccordionMenu,
    NavMenuAccordionTrigger,
    NavMenuLink,
} from './nav-menu-link'
import { gameplaySystems } from '@/data/gameplay-systems'

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
            className="transition-color focus:border-dotted-2 m-0 ml-auto flex items-center gap-2 p-4 text-left text-[1.0625rem] duration-300 ease-in-out hover:text-[#CC4A49] focus:outline-none focus:ring-2 focus:ring-[#CC4A49] lg:hidden"
            aria-label="Menu"
            onClick={toggleMenu}
        >
            {isMenuOpen ? (
                <X size={28} className="m-0 block align-top" />
            ) : (
                <MenuIcon size={28} className="m-0 block align-top" />
            )}
            <span className="inline-flex">Menu</span>
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
                    <li className="relative m-0">
                        <NavMenuLink href="/">
                            <HomeIcon size={22} />
                            Cos&apos;è Slice & Dice?
                        </NavMenuLink>
                    </li>
                    <li className="relative m-0">
                        <NavMenuLink href="/faq">
                            <CircleHelp size={22} />
                            F.A.Q.
                        </NavMenuLink>
                    </li>
                    <li className="relative m-0">
                        <NavMenuAccordion>
                            <NavMenuAccordionTrigger>
                                <BookText size={22} />
                                Sistemi di Gioco
                            </NavMenuAccordionTrigger>
                            <NavMenuAccordionMenu>
                                {gameplaySystems.map(({ name, url }) => (
                                    <NavMenuAccordionLink key={url} href={`/sistemi-di-gioco/${url}`}>
                                        {name}
                                    </NavMenuAccordionLink>
                                ))}
                            </NavMenuAccordionMenu>
                        </NavMenuAccordion>
                    </li>
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
