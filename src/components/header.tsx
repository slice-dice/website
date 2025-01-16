import { BookText, CircleHelp, Home } from 'lucide-react'

import { ReactElement } from 'react'
import Link from 'next/link'
import { NavLink } from './nav-link'
import { NavDropdown, NavDropdownTrigger, NavDropdownMenu, NavDropdownItem } from './nav-dropdown'

import { gameplaySystems } from '@/data/gameplay-systems'

function Brand(): ReactElement {
    return (
        <div className="m-0 flex max-w-full flex-col justify-center p-0">
            <p className="m-0 p-0 text-2xl font-bold sm:text-3xl md:text-4xl">
                <Link href="/" className="transition-color duration-300 ease-in-out hover:text-[#CC4A49]">
                    Slice & Dice
                </Link>
            </p>
        </div>
    )
}

export async function Header(): Promise<ReactElement> {
    return (
        <header className="border-b bg-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="flex flex-wrap items-center py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
                <Brand />
                <div className="relative ml-auto flex w-full items-center lg:w-auto">
                    <nav className="m-0 flex flex-wrap gap-8 p-0 text-lg lg:py-2">
                        <NavLink href="/">
                            <Home size={22} />
                            Cos&apos;è Slice & Dice?
                        </NavLink>
                        <NavLink href="/faq">
                            <CircleHelp size={22} />
                            F.A.Q.
                        </NavLink>
                        <NavDropdown>
                            <NavDropdownTrigger>
                                <BookText size={22} />
                                Sistemi di Gioco
                            </NavDropdownTrigger>
                            <NavDropdownMenu>
                                {gameplaySystems.map(({ name, url }) => (
                                    <NavDropdownItem key={url} href={`/sistemi-di-gioco/${url}`}>
                                        {name}
                                    </NavDropdownItem>
                                ))}
                            </NavDropdownMenu>
                        </NavDropdown>
                    </nav>
                </div>
            </div>
        </header>
    )
}
