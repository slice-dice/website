import { ReactElement } from 'react'
import Link from 'next/link'

import { NavMenu } from './nav-menu'
import { Navbar } from './navbar'

function Brand(): ReactElement {
    return (
        <div className="m-0 my-auto flex max-w-full flex-col items-center p-0">
            <p className="m-0 p-0 text-[1.5rem] font-bold leading-[1.4] sm:text-[1.75rem] sm:leading-[1.4] lg:text-[2rem] lg:leading-[1.4] xl:text-[2.25rem] xl:leading-[1.4]">
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
                <NavMenu />
                <Navbar />
            </div>
        </header>
    )
}
