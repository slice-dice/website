import { BookText, CircleHelp, Home, LineChart, List } from 'lucide-react'

import { ReactElement } from 'react'
import { NavbarLink } from './navbar-link'
import { NavbarDropdown, NavbarDropdownTrigger, NavbarDropdownMenu, NavbarDropdownItem } from './navbar-dropdown'

import { gameplaySystems } from '@/data/gameplay-systems'
import { interactiveGraphs } from '@/data/interactive-graphs'

export const Navbar = (): ReactElement => {
    return (
        <>
            <div className="relative ml-auto hidden w-full items-center lg:flex lg:w-auto">
                <nav className="m-0 flex flex-wrap gap-8 p-0 text-lg lg:py-2">
                    <NavbarLink href="/">
                        <Home size={22} />
                        Cos&apos;è Slice & Dice?
                    </NavbarLink>
                    <NavbarLink href="/faq">
                        <CircleHelp size={22} />
                        F.A.Q.
                    </NavbarLink>
                    <NavbarDropdown>
                        <NavbarDropdownTrigger>
                            <BookText size={22} />
                            Sistemi di Gioco
                        </NavbarDropdownTrigger>
                        <NavbarDropdownMenu>
                            {gameplaySystems.map(({ name, url }) => (
                                <NavbarDropdownItem key={url} href={`/sistemi-di-gioco/${url}`}>
                                    {name}
                                </NavbarDropdownItem>
                            ))}
                        </NavbarDropdownMenu>
                    </NavbarDropdown>
                    <NavbarDropdown>
                        <NavbarDropdownTrigger>
                            <LineChart size={22} />
                            Grafici Interattivi
                        </NavbarDropdownTrigger>
                        <NavbarDropdownMenu>
                            {interactiveGraphs.map(({ name, url }) => (
                                <NavbarDropdownItem key={url} href={`/grafici-interattivi/${url}`}>
                                    {name}
                                </NavbarDropdownItem>
                            ))}
                        </NavbarDropdownMenu>
                    </NavbarDropdown>
                    <NavbarLink href="/glossario">
                        <List size={22} />
                        Glossario
                    </NavbarLink>
                </nav>
            </div>
        </>
    )
}
