import { ReactElement } from 'react'
import { NavbarLink } from './navbar-link'
import { NavbarDropdown, NavbarDropdownTrigger, NavbarDropdownMenu, NavbarDropdownItem } from './navbar-dropdown'

import { routes } from '@/data/routes'

export const Navbar = (): ReactElement => {
    return (
        <>
            <div className="relative ml-auto hidden w-full items-center lg:flex lg:w-auto">
                <nav className="m-0 flex flex-wrap gap-8 p-0 text-lg lg:py-2">
                    {routes.map(({ name, url, icon, items }) => {
                        // Build icon element
                        const Icon = icon

                        if (items && items.length > 0) {
                            return (
                                <NavbarDropdown key={url}>
                                    <NavbarDropdownTrigger>
                                        <Icon size={22} />
                                        {name}
                                    </NavbarDropdownTrigger>
                                    <NavbarDropdownMenu>
                                        {items.map((item, index) => (
                                            <NavbarDropdownItem key={index} href={`/${url}/${item.url}`}>
                                                {item.name}
                                            </NavbarDropdownItem>
                                        ))}
                                    </NavbarDropdownMenu>
                                </NavbarDropdown>
                            )
                        }

                        return (
                            <NavbarLink key={url} href={`/${url}`}>
                                <Icon size={22} />
                                {name}
                            </NavbarLink>
                        )
                    })}
                </nav>
            </div>
        </>
    )
}
